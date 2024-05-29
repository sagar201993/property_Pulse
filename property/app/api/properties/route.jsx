export const GET = async (request) => {
  try {
    return new Response("Hello world", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
