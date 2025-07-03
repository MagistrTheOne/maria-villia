// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 backdrop-blur-md text-white/60 py-8 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-center md:text-left">
        {/* Left: Logo or Title */}
        <div className="text-white font-semibold tracking-wider">
          © {new Date().getFullYear()} MariVilia Show | All Rights Reserved|сделано визионерами: M♾️1
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#booking" className="hover:text-pink-400 transition">Booking</a>
          <a href="#show" className="hover:text-pink-400 transition">Show</a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            Instagram
          </a>
          <a
            href="https://t.me/Vilia_Vizir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            Telegram
          </a>
        </div>
      </div>

      {/* FX grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-black via-purple-950 to-pink-900 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>
    </footer>
  );
};

export default Footer;
