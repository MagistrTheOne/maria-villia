// src/components/Show.jsx

import React from "react";

const Show = () => {
  return (
    <section id="show" className="w-full min-h-screen flex items-center justify-center bg-black relative px-4 py-20">
      {/* Glassmorph wrapper */}
      <div className="max-w-5xl w-full backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Наше <span className="text-pink-400">Шоу</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-8">
          MariVilia — это сцена, где пробуждается искра. Откровенные танцы, неон, маски, бархат и магия.
          Каждое выступление — как последний поцелуй перед рассветом.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Example Show Cards */}
          {[
            { title: "Crimson Dolls", desc: "Акт с лепестками, шелком и лунной хореографией." },
            { title: "Velvet Eclipse", desc: "Нуар-балет под джаз техно — гипноз на грани сна." },
            { title: "Glass Inferno", desc: "Искры, перья, и огонь в глазах. Буря начинается." },
          ].map((item, i) => (
            <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-white/90 shadow-lg hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-pink-300 mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FX background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-black via-purple-950 to-pink-900 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </section>
  );
};

export default Show;
