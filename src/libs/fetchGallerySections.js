const BASE_URL = "http://localhost:1337";

export async function fetchGallerySections() {
  const res = await fetch(
    `${BASE_URL}/api/imageabouts?populate=imageabout.photo`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch imageabouts");
  }

  const { data } = await res.json();

  // Плоский массив карточек
  return data.flatMap((entry) => {
    const cards = entry.attributes.imageabout || [];
    return cards.map((card) => ({
      title: card.Title || "Без названия",
      description: card.Description || "",
      images: (card.photo || []).map((media) => {
        const relUrl = media.formats?.medium?.url || media.url || "";
        const url = relUrl.startsWith("/") ? BASE_URL + relUrl : relUrl;
        return {
          url,
          name: media.name || "image",
        };
      }),
    }));
  });
}
