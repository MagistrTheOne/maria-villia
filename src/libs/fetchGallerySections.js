export const fetchImageUploads = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/imagesuploadies?populate[ImageCard][populate]=Image");
    const json = await res.json();
    return json.data.map(entry => {
      const card = entry.attributes.ImageCard || {};
      const imageData = card.Image || {};
      const imageUrl =
        imageData.formats?.medium?.url ||
        imageData.url ||
        "";

      return {
        id: entry.id,
        title: card.Title || "Без названия",
        image: imageUrl.startsWith("/")
          ? `http://localhost:1337${imageUrl}`
          : imageUrl,
        date: card.Data || "",
      };
    });
  } catch (err) {
    console.error("🔥 Ошибка в fetchImageUploads:", err);
    return [];
  }
};
