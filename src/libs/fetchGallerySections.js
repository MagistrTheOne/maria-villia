export const fetchGallerySections = async () => {
  const res = await fetch("http://localhost:1337/api/imagesuploadies?populate[imageupload][populate]=*");

  if (!res.ok) throw new Error("Failed to fetch imagesuploadies");

  const json = await res.json();

  // Преобразуем под структуру с секцией (title + blocks)
  const normalized = json.data.map(item => {
    return {
      title: item.imageupload?.[0]?.Title || "Без названия", // секционный тайтл (первый айтем)
      blocks: item.imageupload.map(card => ({
        __component: "shared.images",
        Image: [card] // как галерея из одного или нескольких
      }))
    };
  });

  return normalized;
};
