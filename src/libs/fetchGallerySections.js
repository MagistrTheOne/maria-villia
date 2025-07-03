// src/libs/fetchGallerySections.js
const BASE_URL = "http://localhost:1337";

export async function fetchGallerySections() {
  const res = await fetch(
    `${BASE_URL}/api/imageabouts?populate[imageabout][populate]=photo`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch imageabouts");
  }

  const { data } = await res.json();

  return data.flatMap(entry => {
    const cards = entry.attributes.imageabout || [];

    return cards.map(card => ({
      title: card.Title || "Без названия",
      description: card.Description || "",
      images: (card.photo || []).map(media => {
        // выбираем medium, иначе оригинал
        const relUrl = media.formats?.medium?.url || media.url;
        return {
          url: relUrl ? BASE_URL + relUrl : "/",
          name: media.name || "image",
        };
      }),
    }));
  });
}
