import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-3xl max-w-2xl w-full shadow-2xl border border-white/20"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Section */}
            <div className={`bg-gradient-to-br ${project.color} p-8 rounded-t-3xl relative`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
              
              <div className="text-center text-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-white/90">{project.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Tech Stack */}
              <div className="flex justify-center space-x-4 mb-6">
                {project.tech.map((tech, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded-lg">
                    <img src={tech} alt="tech" className="w-6 h-6" />
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Link to={project.github} target="_blank" className="flex-1">
                  <button className="w-full bg-gray-800 text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors">
                    View Code
                  </button>
                </Link>
                <Link to={project.demo} target="_blank" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;