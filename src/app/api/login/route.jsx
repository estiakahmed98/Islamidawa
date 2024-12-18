import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";

const setCorsHeaders = (res) => {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.headers.set("Access-Control-Max-Age", "86400");
};

const setCookie = (res, userId, role) => {
  const cookieValue = `userId=${userId}; role=${role}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`;
  res.headers.set("Set-Cookie", cookieValue);
};

export async function OPTIONS() {
  const response = new Response(null, { status: 204 });
  setCorsHeaders(response);
  return response;
}

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new Response("All fields are required", { status: 400 });
    }

    console.log("Attempting login with:", { email, role });

    const newUser = await prisma.newUser.findFirst({
      where: { email, role },
    });

    console.log("User found:", newUser);

    if (!newUser) {
      console.log("No user found with the provided email and role.");
      const response = new Response("Invalid credentials", { status: 401 });
      setCorsHeaders(response);
      return response;
    }

    const isPasswordValid = await bcrypt.compare(password, newUser.password);
    if (!isPasswordValid) {
      console.log("Invalid password.");
      const response = new Response("Invalid credentials", { status: 401 });
      setCorsHeaders(response);
      return response;
    }
    const response = new Response(
      JSON.stringify({
        message: `Welcome ${role}!`,
        user: {
          email: newUser.email,
          role: newUser.role,
          name: newUser.fullName,
          id: newUser.id,
          division: newUser.division,
          district: newUser.district,
          upazila: newUser.upazila,
          tunion: newUser.tunion,
          markaz: newUser.markaz,

          phoneNumber: newUser.phoneNumber,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

    setCookie(response, newUser.id);

    setCorsHeaders(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    const response = new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
    setCorsHeaders(response);
    return response;
  }
}

export async function GET(req) {
  try {
    const users = await prisma.newUser.findMany();
    const response = new Response(JSON.stringify(users), { status: 200 });
    setCorsHeaders(response);
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    const response = new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
    setCorsHeaders(response);
    return response;
  }
}
