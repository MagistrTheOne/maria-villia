export async function fetchGallerySections() {
  const res = await fetch("http://localhost:1337/api/gallery-sections?populate[Image][populate]=Image", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch gallery sections");
  }

  const json = await res.json();
  return json.data;
}
