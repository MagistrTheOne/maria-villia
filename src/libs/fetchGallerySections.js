const BASE_URL = "http://localhost:1337";

export const fetchGallerySections = async () => {
  const res = await fetch(`${BASE_URL}/api/imagesuploadies?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch imagesuploadies");

  const { data } = await res.json();
  console.log("Ответ Strapi:", data);

  return data.map((entry) => {
    const items = entry.attributes.imageupload || [];

    return {
      title: items[0]?.Title || "Без названия",
      images: items.flatMap((item) => {
        const images = Array.isArray(item.Image) ? item.Image : [];
        return images.map((media) => {
          const relUrl = media?.formats?.medium?.url || media?.url;
          const url = relUrl ? BASE_URL + relUrl : "/";
          return {
            title: item.Title,
            date: item.Data,
            url,
          };
        });
      }),
    };
  });
};
