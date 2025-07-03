export const fetchGallerySections = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/about?populate[blocks][populate]=deep");
    const json = await res.json();
    return json.data?.attributes?.blocks || [];
  } catch (err) {
    console.error("Ошибка при fetchGallerySections:", err);
    return [];
  }
};
