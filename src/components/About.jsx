import React, { useEffect, useState } from "react";
import { fetchGallerySections } from "../libs/fetchGallerySections";
import { motion } from "framer-motion";

const About = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchGallerySections()
      .then(setCards)
      .catch(err =>
        console.error("❌ Ошибка при загрузке секции About:", err)
      );
  }, []);

  return (
    <section className="w-full min-h-screen bg-black px-4 py-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">О проекте</h2>
        <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
          MariVilia Show — Вокальный Шоу дуэт.
        </p>
        <p className="text-white/70 mt-4 text-lg max-w-3xl mx-auto">
          Самое дорогое шоу, которое ты видел в своей жизни.
        </p>
      </div>

      {cards.map((card, idx) => (
        <div key={idx} className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-2 text-white">
            {card.title}
          </h3>
          {card.description && (
            <p className="text-center text-white/60 mb-6">
              {card.description}
            </p>
          )}
          <motion.div
            className="overflow-x-auto scrollbar-hide px-4 sm:px-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <div className="flex gap-6 snap-x snap-mandatory">
              {card.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="snap-start shrink-0 w-72 bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 text-sm text-white/70">
                    {img.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default About;
