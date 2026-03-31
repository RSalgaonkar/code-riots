import React from 'react';

const Hero = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-20 pb-32 px-5 min-h-screen flex items-center">
    <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Rashmith</span><br />
          Frontend Developer
        </h1>
        <p className="text-xl mb-8">React.js, JavaScript, MERN Stack | Panjim, Goa</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-bold">View Projects</a>
      </div>
      <div className="hero-img">
        {/* Add your photo: import HeroImg from '../assets/hero.png'; <img src={HeroImg} alt="Rashmith" className="w-full max-w-md mx-auto rounded-lg shadow-2xl" /> */}
        <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default Hero;