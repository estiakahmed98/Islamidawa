// app/api/signup/route.js
import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { fullName, email, password, role, division, district, thana } =
    await req.json();

  console.log("Received data:", {
    fullName,
    role,
    email,
    password,
    division,
    district,
    thana,
  });

  // Basic validation
  if (!fullName || !email || !password || !role) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.newUser.create({
      data: {
        fullName,
        role,
        division,
        district,
        thana,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("user Created Failed", { status: 500 });
  }
}

// // import prisma from "../../../../prisma/prisma";
// // import bcrypt from "bcrypt";

// // export async function POST(req) {
// //   const { fullName, email, password, role } = await req.json();

// //   console.log("Received data:", {
// //     fullName,
// //     role,
// //     email,
// //     password,
// //     // divisions,
// //     // districts,
// //     // thanas,
// //   });

// //   if (
// //     !fullName ||
// //     !email ||
// //     !password ||
// //     !role
// //     // !divisions ||
// //     // !districts ||
// //     // !thanas
// //   ) {
// //     return new Response("All fields are required", { status: 400 });
// //   }

// //   try {
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = await prisma.newUser.create({
// //       data: {
// //         fullName,
// //         role,
// //         // divisions,
// //         // districts,
// //         // thanas,
// //         email,
// //         password: hashedPassword,
// //       },
// //     });
// //     console.log("User created:", newUser);
// //     return new Response(JSON.stringify(newUser), { status: 201 });
// //   } catch (error) {
// //     console.error("Error creating user:", error);
// //     return new Response("Failed to create user", { status: 500 });
// //   }
// // }

// // app/api/signup/route.js
// import prisma from "../../../../prisma/prisma";
// import bcrypt from "bcrypt";

// export async function POST(req) {
//   const { fullName, email, password, role } = await req.json();

//   console.log("Received data:", {
//     fullName,
//     role,
//     email,
//     password,
//   });

//   // Basic validation
//   if (!fullName || !email || !password || !role) {
//     return new Response("All fields are required", { status: 400 });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await prisma.newUser.create({
//       data: {
//         fullName,
//         role,
//         email,
//         password: hashedPassword,
//       },
//     });
//     console.log(newUser);
//     return new Response(JSON.stringify(newUser), { status: 201 });
//   } catch (error) {
//     return new Response("user Created Failed", { status: 500 });
//   }
// }
