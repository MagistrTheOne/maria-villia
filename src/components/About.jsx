import React, { useEffect, useState } from "react";
import { fetchGallerySections } from "../api/gallery-sections";
import { motion } from "framer-motion";

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
          MariVilia Show — Вокальный Шоу дуэт.
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
        <div className="overflow-x-auto scrollbar-hide px-4 sm:px-16">
          <motion.div
            className="flex gap-6 snap-x snap-mandatory"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {activeSection.Image.sort((a, b) => (a.order || 0) - (b.order || 0)).map(
              (card, index) => {
                const mockImage = "/";
                const imageUrl =
                  card.Image?.formats?.medium?.url ||
                  card.Image?.url ||
                  mockImage;

                return (
                  <motion.div
                    key={index}
                    className="snap-start shrink-0 w-72 bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={imageUrl}
                      alt={card.caption || `Картинка ${index + 1}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    {card.caption && (
                      <div className="p-3 text-sm text-white/70">
                        {card.caption}
                      </div>
                    )}
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;
