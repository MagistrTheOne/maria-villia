export const fetchGallerySections = async () => {
  const res = await fetch("http://localhost:1337/api/imagesuploadies?populate[imageupload][populate]=Image");

  if (!res.ok) throw new Error("Failed to fetch imagesuploadies");

  const json = await res.json();

  return json.data.map(entry => {
    const items = entry.attributes?.imageupload || [];

    return {
      title: items[0]?.Title || "Без названия",
      images: items.map(item => ({
        title: item.Title,
        date: item.Data,
        url: item.Image?.formats?.medium?.url || item.Image?.url || "/",
      })),
    };
  });
};
