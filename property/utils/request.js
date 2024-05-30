const apidomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    //handle when domain is not available yet
    if (!apidomain) {
      return [];
    }
    const res = await fetch(`${apidomain}/properties`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return [];
    console.log(error);
  }
}

export { fetchProperties };
