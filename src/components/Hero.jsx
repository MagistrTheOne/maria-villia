

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Glassmorphism Container */}
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          MariVilia Show
        </h1>
        <p className="text-white/70 text-lg md:text-xl">
          Ночь страсти, шика и провокации. Добро пожаловать в{" "}
          <span className="text-pink-400">бурлеск-театр будущего</span>.
        </p>
        <a
          href="https://t.me/Vilia_Vizir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-pink-600/30 hover:bg-pink-600/50 transition rounded-full text-white border border-pink-500/50 backdrop-blur-md"
        >
          Забронировать вечер
        </a>
      </div>
    </section>
  );
};

export default Hero;
