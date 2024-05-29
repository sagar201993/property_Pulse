import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response("Hello world", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
