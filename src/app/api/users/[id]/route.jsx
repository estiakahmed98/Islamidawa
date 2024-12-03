import prisma from "../../../../../prisma/prisma";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const deletedUser = await prisma.newUser.delete({
      where: { id: parseInt(id, 10) },
    });
    return new Response(
      JSON.stringify({ message: "User deleted successfully", deletedUser }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response("Failed to delete user", { status: 500 });
  }
}
