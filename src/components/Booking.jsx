// src/components/Booking.jsx

import React, { useState } from "react";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Заявка на бронирование:%0A👤 Имя: ${name}%0A📧 Email: ${email}%0A💬 Сообщение: ${message}`;
    const tgLink = `https://t.me/Vilia_Vizir?text=${text}`;

    window.open(tgLink, "_blank");
  };

  return (
    <section
      id="booking"
      className="w-full min-h-screen flex items-center justify-center bg-black relative px-4 py-20"
    >
      {/* Glassmorphism Form Container */}
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Забронировать <span className="text-pink-400">вечер</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-8 md:mb-10">
          Лимитированные места. Атмосфера, которую не передать словами — только вживую.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6 text-left">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/10 text-white px-4 md:px-5 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/50 text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email для подтверждения"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 text-white px-4 md:px-5 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/50 text-sm md:text-base"
          />
          <textarea
            placeholder="Пожелания или запросы"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="bg-white/10 text-white px-4 md:px-5 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/50 text-sm md:text-base resize-none"
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-5 md:px-6 py-3 bg-pink-600/30 hover:bg-pink-600/50 transition rounded-full text-white border border-pink-500/50 backdrop-blur-md text-sm md:text-base"
          >
            Отправить заявку
          </button>
        </form>
      </div>

      {/* FX Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-t from-black via-purple-950 to-pink-900 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </section>
  );
};

export default Booking;
