import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', level: 80, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Material UI', level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'AG Grid', level: 80, color: 'from-pink-500 to-pink-600' }
  ];

  return (
    <section id="skills" className="bg-slate-900 text-white px-5 py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 w-40 pb-4 mx-auto text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Frontend</h3>
            {skills.slice(0, 4).map((skill, i) => (
              <div key={i} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">Tools & Others</h3>
            {skills.slice(4).map((skill, i) => (
              <div key={i + 4} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech Stack Icons */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-12">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8 text-4xl">
            <i className="devicon-react-original colored text-blue-400"></i>
            <i className="devicon-javascript-plain colored text-yellow-400"></i>
            <i className="devicon-nodejs-plain colored text-green-400"></i>
            <i className="devicon-mongodb-plain colored text-green-600"></i>
            <i className="devicon-git-plain colored text-orange-500"></i>
            <i className="devicon-vscode-plain colored text-blue-600"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;