export async function fetchGallerySections() {
  const res = await fetch(
    "https://balanced-dream-271ea111c9.strapiapp.com/api/gallery-sections?populate[Image][populate]=Image",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch gallery sections");
  }

  const json = await res.json();
  return json.data;
}
