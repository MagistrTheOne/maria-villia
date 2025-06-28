// src/App.jsx

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Booking from './components/Booking'
import Show from './components/Show'

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Booking />
        <Show />
      </main>
      <Footer />
    </div>
  )
}

export default App
