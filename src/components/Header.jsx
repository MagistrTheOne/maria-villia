// src/components/Header.jsx

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Иконки

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-white font-semibold text-xl tracking-wide">
          MariVilia<span className="text-pink-400">Show</span>
        </div>

        {/* Desktop Навигация */}
        <nav className="hidden md:flex gap-8 text-white/80 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#booking" className="hover:text-pink-400 transition">Booking</a>
          <a href="#show" className="hover:text-pink-400 transition">Show</a>
        </nav>

        {/* Мобильная иконка */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-black/90 border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white/80 text-base tracking-wide">
          <a href="#about" onClick={closeMenu} className="hover:text-pink-400 transition">About</a>
          <a href="#booking" onClick={closeMenu} className="hover:text-pink-400 transition">Booking</a>
          <a href="#show" onClick={closeMenu} className="hover:text-pink-400 transition">Show</a>
        </div>
      )}
    </header>
  );
};

export default Header;
