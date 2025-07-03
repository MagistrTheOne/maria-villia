const BASE_URL = "http://localhost:1337";

export async function fetchGallerySections() {
  // Попапулим только вложенный компонент и его фото
  const res = await fetch(
    `${BASE_URL}/api/imageabouts?populate=imageabout.photo`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch imageabouts");
  }

  const { data } = await res.json();

  // data — это массив записей коллекции imageabouts
  // У каждой записи в attributes.imageabout лежит массив карточек
  return data.flatMap((entry) => {
    const cards = entry.attributes.imageabout || [];
    return cards.map((card) => ({
      title: card.Title || "Без названия",
      description: card.Description || "",
      images: (card.photo || []).map((media) => {
        // выбираем medium-формат, иначе оригинал
        const rel = media.formats?.medium?.url || media.url || "";
        const url = rel.startsWith("/") ? BASE_URL + rel : rel;
        return {
          url,
          name: media.name || "image",
        };
      }),
    }));
  });
}
