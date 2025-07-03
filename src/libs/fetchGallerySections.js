const BASE_URL = "http://localhost:1337";

export const fetchGallerySections = async () => {
  const res = await fetch(
    // Попапулим сразу вложенное поле imageupload.Image
    `${BASE_URL}/api/imagesuploadies?populate[imageupload][populate]=Image`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch imagesuploadies");
  }

  const json = await res.json();
  console.log("Ответ Strapi:", json);

  // Преобразуем в нужную форму
  return json.data.map((entry) => {
    const items = entry.attributes?.imageupload || [];

    return {
      title: items[0]?.Title || "Без названия",
      images: items.map((item) => {
        const media = item.Image; // теперь это объект
        const medium = media?.formats?.medium;

        return {
          title: item.Title,
          date: item.Data,
          url: medium?.url
            ? BASE_URL + medium.url
            : media?.url
            ? BASE_URL + media.url
            : "/",
        };
      }),
    };
  });
};
