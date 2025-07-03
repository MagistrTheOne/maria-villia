import React, { useEffect, useState } from "react";
import { fetchGallerySections } from "../api/gallery-sections";
import { motion } from "framer-motion";

const About = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchGallerySections();
        setBlocks(data);
      } catch (err) {
        console.error("Ошибка при загрузке блоков:", err);
      }
    };
    load();
  }, []);

  const renderBlock = (block, index) => {
    switch (block.__component) {
      case "shared.images":
        return (
          <motion.div
            key={index}
            className="overflow-x-auto scrollbar-hide px-4 sm:px-16 my-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <div className="flex gap-6 snap-x snap-mandatory">
              {block.Image?.map((item, i) => {
                const img = item.Image;
                const url = img?.formats?.medium?.url || img?.url || "/";
                return (
                  <motion.div
                    key={i}
                    className="snap-start shrink-0 w-72 bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={url}
                      alt={item.Title || `Картинка ${i + 1}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    {item.Title && (
                      <div className="p-3 text-sm text-white/70">
                        {item.Title}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );

      // Можно добавить другие блоки тут
      case "shared.quote":
      case "shared.rich-text":
      case "shared.slider":
      default:
        return null;
    }
  };

  return (
    <section className="w-full min-h-screen bg-black px-4 py-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">О проекте</h2>
        <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
          MariVilia Show — Вокальный Шоу дуэт.
        </p>
        <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
          Самое дорогое шоу-которое ты видел в своей жизни.
        </p>
      </div>

      {blocks.map(renderBlock)}
    </section>
  );
};

export default About;
