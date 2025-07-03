const BASE_URL = "http://localhost:1337";

export const fetchGallerySections = async () => {
  const res = await fetch(`${BASE_URL}/api/imagesuploadies?populate[imageupload][populate]=Image`);

  if (!res.ok) throw new Error("Failed to fetch imagesuploadies");

  const json = await res.json();

  return json.data.map(entry => {
    const items = entry.attributes?.imageupload || [];

    return {
      title: items[0]?.Title || "Без названия",
      images: items.map(item => {
        const rawUrl = item.Image?.formats?.medium?.url || item.Image?.url || "/";
        const fullUrl = rawUrl.startsWith("/") ? BASE_URL + rawUrl : rawUrl;

        console.log("🖼️ item:", {
          title: item.Title,
          date: item.Data,
          fullUrl,
        });

        return {
          title: item.Title,
          date: item.Data,
          url: fullUrl,
        };
      }),
    };
  });
};
