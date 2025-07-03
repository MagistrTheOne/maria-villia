const BASE_URL = "http://localhost:1337";

export const fetchGallerySections = async () => {
  const res = await fetch(`${BASE_URL}/api/imagesuploadies?populate[imageupload][populate]=Image`);

  if (!res.ok) throw new Error("Failed to fetch imagesuploadies");

  const json = await res.json();

  return json.data.map(entry => {
    const items = entry.attributes?.imageupload || [];

    return {
      title: items[0]?.Title?.trim() || "Без названия",
      images: items.map(item => {
        const img = item?.Image;
        const imgUrl =
          img?.formats?.medium?.url
            ? `${BASE_URL}${img.formats.medium.url}`
            : img?.url
            ? `${BASE_URL}${img.url}`
            : null;

        return {
          title: item?.Title?.trim() || "Нет названия",
          date: item?.Data || "Без даты",
          url: imgUrl || "/fallback.jpg", // сюда можешь засунуть заглушку
        };
      }),
    };
  });
};
