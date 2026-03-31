import React from 'react';

const About = () => (
  <section id="about" className="bg-slate-800 text-white px-5 py-32">
    <div className="container mx-auto grid md:grid-cols-2 items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 w-48 pb-4">About Me</h2>
        <p className="text-lg mb-6">Frontend developer specializing in React.js, JavaScript, and modern stacks like MERN, Material UI, Tailwind CSS, AG Grid. Experienced in real-time chat apps, dashboards, and interview prep.</p>
        <p className="text-lg">Currently job hunting in Mumbai/remote while managing health routines and coding challenges.</p>
        <ul className="mt-8 space-y-2">
          <li>• React Hooks, useCallback, Memoization</li>
          <li>• Node.js, MongoDB, WebSockets</li>
          <li>• Sci-fi movies & Sanskrit shlokas fan</li>
        </ul>
      </div>
      <div>
        {/* Add photo: import AboutImg from '../assets/about.png'; */}
        <div className="w-96 h-96 bg-slate-700 rounded-2xl mx-auto shadow-2xl"></div>
      </div>
    </div>
  </section>
);

export default About;