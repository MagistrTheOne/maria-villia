import React, { useEffect, useState } from "react";
import { fetchGallerySections } from "../api/gallery-sections";

const About = () => {
  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchGallerySections();
        if (Array.isArray(data)) {
          setSections(data);
        }
      } catch (err) {
        console.error("Ошибка при загрузке секций:", err);
      }
    };
    load();
  }, []);

  const activeSection = sections[activeIndex];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black px-4 py-20 relative text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">О проекте</h2>
        <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
          MariVilia Show — Вокальный Шоу Дуэт.
        </p>
        <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
          Самое дорогое шоу-которое ты видел в своей жизни.
        </p>
      </div>

      {/* Навигация по секциям */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {sections.map((section, index) => (
          <button
            key={section.id || index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full border transition ${
              activeIndex === index
                ? "bg-white text-black font-semibold"
                : "border-white/30 text-white/60 hover:text-white"
            }`}
          >
            {section.Title || `Секция ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Контент активной секции */}
      {activeSection?.Image?.length > 0 && (
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-6 sm:px-16 snap-x snap-mandatory">
            {activeSection.Image.sort((a, b) => (a.order || 0) - (b.order || 0)).map(
              (card, index) => {
                const imageUrl =
                  card.Image?.formats?.medium?.url ||
                  card.Image?.url ||
                  "";
                return (
                  <div
                    key={index}
                    className="snap-start shrink-0 w-72 bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={`http://localhost:5173${imageUrl}`}
                      alt={card.caption || `Картинка ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    {card.caption && (
                      <div className="p-3 text-sm text-white/70">
                        {card.caption}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
