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

      case "shared.quote":
        return (
          <div
            key={index}
            className="max-w-4xl mx-auto px-4 py-12 text-center"
          >
            <blockquote className="text-2xl italic text-white/80">
              "{block.text}"
            </blockquote>
            {block.author && (
              <p className="mt-4 text-white/60">— {block.author}</p>
            )}
          </div>
        );

      case "shared.rich-text":
        return (
          <div
            key={index}
            className="max-w-3xl mx-auto px-4 py-8 text-white/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );

      case "shared.slider":
        return (
          <div
            key={index}
            className="w-full overflow-hidden px-4 py-12"
          >
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {block.items?.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[300px] bg-white/10 text-white p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

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
