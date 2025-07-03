const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-pink-900/10 z-0" />

      <div className="relative z-10 w-full max-w-6xl text-center text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          MariVilia Show
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
          Самое дорогое, что ты видел на сцене.  
          <br />
          <span className="text-pink-500 font-medium">Вечер шика, голоса и настоящего соблазна.</span>
        </p>

        <a
          href="https://t.me/Vilia_Vizir"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-4 text-lg font-semibold bg-pink-600/40 hover:bg-pink-600/60 border border-pink-400/40 backdrop-blur-lg rounded-full transition"
        >
          Забронировать вечер
        </a>
      </div>
    </section>
  );
};

export default Hero;
