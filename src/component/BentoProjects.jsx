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
      title: 'Quote Generator',
      description: 'Beautiful quote generator with social sharing',
      image: '/quotemockup.svg',
      tech: ['/tailwind.svg', '/react.svg', '/firebase.svg'],
      github: 'https://github.com/Kaungsett45/quotegenerator',
      demo: 'https://drive.google.com/file/d/1XK7gtD-9WAjZroafdMeEF7cW7B5udbIh/view?usp=sharing',

      featured: false,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Quizzi',
      description: 'Interactive quiz system with real-time scoring',
      image: '/quizzimockup.svg',
      tech: ['/java.svg', '/css.svg', '/spring.svg'],
      github: 'https://github.com/Kaungsett45/QuzziSystem',
      demo: 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',

      featured: false,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="py-12 px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {/* Featured Project - Large */}
        <motion.div 
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[300px] lg:min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className={`h-full bg-gradient-to-br ${projects[0].color} p-4 sm:p-6 relative`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="max-h-32 sm:max-h-40 lg:max-h-48 object-contain"
                />
              </div>
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{projects[0].title}</h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base">{projects[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {projects[0].tech.map((tech, index) => (
                      <img key={index} src={tech} alt="tech" className="w-5 h-5 sm:w-6 sm:h-6" />
                    ))}
                  </div>
                  <div>
                    <Link to={projects[0].github} target="_blank">
                      <button className="bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-white/30 transition-colors">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regular Projects */}
        {projects.slice(1).map((project, index) => (
          <motion.div 
            key={project.id}
            className="sm:col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[250px] lg:min-h-[190px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className={`h-full bg-gradient-to-br ${project.color} p-3 sm:p-4 relative`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-h-16 sm:max-h-20 lg:max-h-24 object-contain"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-base sm:text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {project.tech.map((tech, techIndex) => (
                        <img key={techIndex} src={tech} alt="tech" className="w-3 h-3 sm:w-4 sm:h-4" />
                      ))}
                    </div>
                    <div>
                      <Link to={project.github} target="_blank">
                        <button className="bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded text-xs hover:bg-white/30 transition-colors">
                          View Code
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoProjects;