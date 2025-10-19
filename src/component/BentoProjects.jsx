import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BentoProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Rublet',
      description: 'Movie streaming platform with advanced search',
      image: '/moviemockup.svg',
      tech: ['/java.svg', '/css.svg', '/spring.svg'],
      github: 'https://github.com/Kaungsett45/Rublet',
      demo: 'https://drive.google.com/file/d/1kMMMkJqDOxg3yYGkUObZooxXWka_r863/view?usp=sharing',

      featured: true,
      color: 'from-blue-500 to-purple-600'
    },
 
    {
      id: 2,
      title: 'Quizzi',
      description: 'Interactive quiz system with real-time scoring',
      image: '/quizzimockup.svg',
      tech: ['/java.svg', '/css.svg', '/spring.svg'],
      github: 'https://github.com/Kaungsett45/QuzziSystem',
      demo: 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',

      featured: false,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 3,
      title: 'CodeExplainer',
      description: 'Explain code snippets using AI',
      image: '/CodeMind.svg',
      tech: ['/react.svg', '/tailwind.svg', '/node.svg'],
      github: 'https://github.com/Kaungsett45/AiCodeExplainer',
      demo: 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',
      featured: false,
      color: 'from-purple-500 to-pink-600'
    },
       {
      id: 4,
      title: 'Quote Generator',
      description: 'Beautiful quote generator with social sharing',
      image: '/quotemockup.svg',
      tech: ['/tailwind.svg', '/react.svg', '/firebase.svg'],
      github: 'https://github.com/Kaungsett45/quotegenerator',
      demo: 'https://drive.google.com/file/d/1XK7gtD-9WAjZroafdMeEF7cW7B5udbIh/view?usp=sharing',

      featured: false,
      color: 'from-green-500 to-teal-600'
    },
 
  ];

  return (
    <div className="px-4 py-12">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto lg:grid-cols-4">
        {/* Project 1 - Large Featured */}
        <motion.div 
          className="col-span-2 row-span-2 overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl group hover:shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className={`h-full bg-gradient-to-br ${projects[0].color} p-6 relative min-h-[400px]`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="object-contain max-h-48"
                />
              </div>
              <div className="text-white">
                <h3 className="mb-2 text-2xl font-bold">{projects[0].title}</h3>
                <p className="mb-4 text-base text-white/90">{projects[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex px-3 py-1 space-x-2  bg-[#FAF8F1] rounded-full">
                    {projects[0].tech.map((tech, index) => (
                      <img key={index} src={tech} alt="tech" className="w-6 h-6" />
                    ))}
                  </div>
                  <Link to={projects[0].github} target="_blank">
                    <button className="px-4 py-2 text-sm transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      View Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Top Right */}
        <motion.div 
          className="col-span-2 overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl group hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -3 }}
        >
          <div className={`h-full bg-gradient-to-br ${projects[1].color} p-4 relative min-h-[190px]`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex items-center h-full space-x-4">
              <img 
                src={projects[1].image} 
                alt={projects[1].title}
                className="object-contain w-20 h-20"
              />
              <div className="flex-1 text-white">
                <h3 className="mb-1 text-lg font-bold">{projects[1].title}</h3>
                <p className="mb-3 text-sm text-white/90">{projects[1].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex px-3 py-1 rounded-full space-x-1  bg-[#FAF8F1]">
                    {projects[1].tech.map((tech, index) => (
                      <img key={index} src={tech} alt="tech" className="w-4 h-4" />
                    ))}
                  </div>
                  <Link to={projects[1].github} target="_blank">
                    <button className="px-3 py-1 text-xs transition-colors rounded bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      View Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Bottom Left */}
        <motion.div 
          className="col-span-1 overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl group hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -3 }}
        >
          <div className={`h-full bg-gradient-to-br ${projects[2].color} p-4 relative min-h-[190px]`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src={projects[2].image} 
                  alt={projects[2].title}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="text-white">
                <h3 className="mb-1 text-base font-bold">{projects[2].title}</h3>
                <p className="mb-2 text-xs text-white/90">{projects[2].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex px-3 py-1 space-x-1 bg-[#FAF8F1] rounded-full">
                    {projects[2].tech.slice(0, 2).map((tech, index) => (
                      <img key={index} src={tech} alt="tech" className="w-3 h-3" />
                    ))}
                  </div>
                  <Link to={projects[2].github} target="_blank">
                    <button className="px-2 py-1 text-xs transition-colors rounded bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - Bottom Right */}
        <motion.div 
          className="col-span-1 overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl group hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -3 }}
        >
          <div className={`h-full bg-gradient-to-br ${projects[3].color} p-4 relative min-h-[190px]`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src={projects[3].image} 
                  alt={projects[3].title}
                  className="object-contain max-h-16"
                />
              </div>
              <div className="text-white">
                <h3 className="mb-1 text-base font-bold">{projects[3].title}</h3>
                <p className="mb-2 text-xs text-white/90">{projects[3].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex px-3 py-1 space-x-1 bg-[#FAF8F1] rounded-full">
                    {projects[3].tech.slice(0, 2).map((tech, index) => (
                      <img key={index} src={tech} alt="tech" className="w-3 h-3" />
                    ))}
                  </div>
                  <Link to={projects[3].github} target="_blank">
                    <button className="px-2 py-1 text-xs transition-colors rounded bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoProjects;