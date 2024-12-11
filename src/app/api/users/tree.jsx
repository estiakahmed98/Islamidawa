import { verifyToken } from "@/middleware/auth";
import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";

// Dynamic User Tree API
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await dbConnect();

    const user = await verifyToken(req);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const adminRole = user.role;
    const adminId = user.id;

    let users;
    if (adminRole === "centraladmin") {
      users = await User.find({});
    } else if (adminRole === "divisionadmin") {
      users = await User.find({ division: user.division });
    } else if (adminRole === "districtadmin") {
      users = await User.find({ district: user.district });
    } else if (adminRole === "unionadmin") {
      users = await User.find({ union: user.tunion });
    } else {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const buildTree = (data, parentId = null) =>
      data
        .filter((item) => item.parentId === parentId)
        .map((item) => ({
          label: item.name,
          id: item._id,
          children: buildTree(data, item._id),
        }));

    const userTree = buildTree(users);

    res.status(200).json(userTree);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
