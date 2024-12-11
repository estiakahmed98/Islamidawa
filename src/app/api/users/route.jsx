import { cookies } from "next/headers";
import prisma from "../../../../prisma/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = (await cookies()).get("userId")?.value;
    console.log(userId);
    // Extract query parameters
    const role = searchParams.get("role");
    const centraladmin = searchParams.get("centraladmin");
    const division = searchParams.get("division");
    const district = searchParams.get("district");
    const upazila = searchParams.get("upazila");
    const tunion = searchParams.get("tunion");
    const fullName = searchParams.get("fullName");

    // Log the query parameters for debugging
    console.log("Filters received:", {
      role,
      centraladmin,
      division,
      district,
      upazila,
      tunion,
      fullName,
    });

    // Construct filters dynamically
    const filters = {};
    if (role) filters.role = role;
    if (centraladmin) filters.centraladmin = centraladmin;
    if (fullName) filters.fullName = fullName;
    if (division) filters.division = division;
    if (district) filters.district = district;
    if (upazila) filters.upazila = upazila;
    if (tunion) filters.tunion = tunion;

    // Check if filtering specifically by role 'user'
    if (role === "user") {
      // Fetch users with the role "user"
      const users = await prisma.newUser.findMany({
        where: { role: "user" },
      });

      return new Response(JSON.stringify(users), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch filtered users based on other criteria
    const users = await prisma.newUser.findMany({
      where: {
        role: filters.role ? { contains: filters.role } : undefined,
        centraladmin: filters.centraladmin
          ? { contains: filters.centraladmin }
          : undefined,
        fullName: filters.fullName ? { contains: filters.fullName } : undefined,
        division: filters.division ? { contains: filters.division } : undefined,
        district: filters.district ? { contains: filters.district } : undefined,
        upazila: filters.upazila ? { contains: filters.upazila } : undefined,
        tunion: filters.tunion ? { contains: filters.tunion } : undefined,
        AND: { parentAdmin: Number(userId) },
        NOT: { id: Number(userId) },
      },
    });

    console.log("Fetched users:", users);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return new Response(
      JSON.stringify({ message: "Error fetching users", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// import prisma from "../../../../prisma/prisma";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);

//     // Extract query parameters
//     const role = searchParams.get("role");
//     const division = searchParams.get("division");
//     const district = searchParams.get("district");
//     const upazila = searchParams.get("upazila");
//     const tunion = searchParams.get("tunion");
//     const fullName = searchParams.get("fullName");

//     // Log the query parameters for debugging
//     console.log("Filters received:", {
//       role,
//       division,
//       district,
//       upazila,
//       tunion,
//       fullName,
//     });

//     // Construct filters dynamically
//     const filters = {};
//     if (role) filters.role = role;
//     if (fullName) filters.fullName = fullName;
//     if (division) filters.division = division;
//     if (district) filters.district = district;
//     if (upazila) filters.upazila = upazila;
//     if (tunion) filters.tunion = tunion;

//     // Fetch filtered users from Prisma
//     const users = await prisma.newUser.findMany({
//       where: {
//         role: {
//           contains: filters.role,
//         },
//         fullName: {
//           contains: filters.fullName,
//         },
//         division: {
//           contains: filters.division,
//         },
//         district: {
//           contains: filters.district,
//         },
//         upazila: {
//           contains: filters.upazila,
//         },
//         tunion: {
//           contains: filters.tunion,
//         },
//       },
//     });

//     // Log the fetched users for debugging
//     console.log("Fetched users:", users);

//     return new Response(JSON.stringify(users), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error fetching users:", error);

//     return new Response(
//       JSON.stringify({ message: "Error fetching users", error: error.message }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
