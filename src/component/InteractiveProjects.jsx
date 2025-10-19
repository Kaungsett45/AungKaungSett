import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const InteractiveProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Rublet',
      description: 'Movie streaming platform with advanced search and user reviews',
      image: '/moviemockup.svg',
      video: '/video/Rublet.mp4',
      tech: ['/java.svg', '/css.svg', '/spring.svg'],
      github: 'https://github.com/Kaungsett45/Rublet',
      demo: 'https://drive.google.com/file/d/1kMMMkJqDOxg3yYGkUObZooxXWka_r863/view?usp=sharing',
      features: ['User Authentication', 'Movie Search', 'Reviews System'],
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Quote Generator',
      description: 'Beautiful quote generator with social sharing capabilities',
      image: '/quotemockup.svg',
      video: '/video/Quote.mp4',
      tech: ['/tailwind.svg', '/react.svg', '/firebase.svg'],
      github: 'https://github.com/Kaungsett45/quotegenerator',
      demo: 'https://drive.google.com/file/d/1XK7gtD-9WAjZroafdMeEF7cW7B5udbIh/view?usp=sharing',
      features: ['Random Quotes', 'Social Sharing', 'Responsive Design'],
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Quizzi',
      description: 'Interactive quiz system with real-time scoring and analytics',
      image: '/quizzimockup.svg',
      video: '/video/Quizzi.mp4',
      tech: ['/java.svg', '/css.svg', '/spring.svg'],
      github: 'https://github.com/Kaungsett45/QuzziSystem',
      demo: 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',
      features: ['Real-time Scoring', 'Multiple Categories', 'Admin Dashboard'],
      category: 'Full Stack'
    }
  ];

  return (
    <div className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my latest work featuring modern web applications built with cutting-edge technologies
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover={{ y: -8 }}
          >
            {/* Project Image/Video */}
            <div className="relative h-48 overflow-hidden">
              <AnimatePresence mode="wait">
                {hoveredProject === project.id ? (
                  <motion.video
                    key="video"
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.img
                    key="image"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#1A8B9C] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  {project.tech.map((tech, idx) => (
                    <motion.img
                      key={idx}
                      src={tech}
                      alt="tech"
                      className="w-6 h-6"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Link to={project.github} target="_blank" className="flex-1">
                  <motion.button
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Code
                  </motion.button>
                </Link>
                <Link to={project.demo} target="_blank" className="flex-1">
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveProjects;