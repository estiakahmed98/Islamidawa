import { verifyToken } from "@/lib/auth";
import prisma from "@prisma/client";

export async function GET(req) {
  const token = req.cookies.get("authToken"); // Get token from cookies
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return new Response("Invalid token", { status: 402 });
  }

  const user = await prisma.newUser.findUnique({
    where: { id: decoded.id },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}
