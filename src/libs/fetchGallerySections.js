export const fetchGallerySections = async () => {
  const res = await fetch("http://localhost:1337/api/imagesuploadies?populate[imageupload][populate]=Image");

  if (!res.ok) throw new Error("Failed to fetch imagesuploadies");

  const json = await res.json();

  const normalized = json.data.map(entry => {
    const imageupload = entry.attributes?.imageupload || [];

    return {
      title: imageupload[0]?.Title || "Без названия",
      blocks: [
        {
          __component: "shared.images",
          Image: imageupload,
        }
      ]
    };
  });

  return normalized;
};
