import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between px-5 py-3 bg-slate-900 text-white fixed w-full z-20 shadow-lg">
      <a href="/" className="text-2xl font-bold text-blue-400">Rashmith</a>
      <nav className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
      <button onClick={() => setToggle(!toggle)} className="md:hidden">
        {/* {toggle ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />} */}
      </button>
      <nav className={`${toggle ? 'left-0' : '-left-full'} md:hidden fixed top-12 w-full h-screen bg-slate-900 transition-all duration-300 flex flex-col items-center pt-10`}>
        <a href="#about" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>About</a>
        <a href="#skills" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>Skills</a>
        <a href="#projects" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>Projects</a>
        <a href="#contact" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;