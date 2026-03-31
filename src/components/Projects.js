import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Real-time Chat App',
      desc: 'MERN stack with Material UI & Redux',
      img: 'chat-screenshot.png', // Add your image
      live: 'https://your-chat-app.netlify.app',
      code: 'https://github.com/yourusername/chat-app'
    },
    {
      title: 'Expense Tracker',
      desc: 'React frontend + Node API + MongoDB auth',
      img: 'expense-screenshot.png',
      live: 'https://your-expense.netlify.app',
      code: 'https://github.com/yourusername/expense-tracker'
    },
    {
      title: 'Dashboard with AG Grid',
      desc: 'React, Tailwind, AG Grid integration',
      img: 'dashboard-screenshot.png',
      live: '#',
      code: 'https://github.com/yourusername/dashboard'
    }
  ];

  return (
    <section id="projects" className="bg-slate-900 text-white px-5 py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 w-48 pb-4 mx-auto text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, i) => (
            <div key={i} className="relative group cursor-pointer">
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover rounded-xl" />
              <div className="absolute inset-0 bg-slate-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p>{project.desc}</p>
                <div className="mt-6 space-x-4">
                  <a href={project.live} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded">Live</a>
                  <a href={project.code} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;