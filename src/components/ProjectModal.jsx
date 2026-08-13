import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaGithub, FaArrowUpRightFromSquare, FaCheck, FaCode, FaLaptopCode } from 'react-icons/fa6';

export default function ProjectModal({ project, isOpen, onClose, darkMode }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Banner & Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close Project Details Modal"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 backdrop-blur-md border border-slate-700 transition"
            >
              <FaXmark className="text-lg" />
            </button>

            {/* Category Pill */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700">
                Featured Project
              </span>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{project.title}</h2>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.description}
              </p>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 mb-3 flex items-center gap-2">
                <FaLaptopCode /> Key Features & Capabilities
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start gap-3 text-xs sm:text-sm p-3 rounded-xl border ${
                      darkMode ? 'bg-slate-800/50 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200/80 text-slate-800'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-[10px]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 mb-3 flex items-center gap-2">
                <FaCode /> Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                      darkMode ? 'bg-slate-800 text-blue-400 border-slate-700' : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 flex-wrap bg-slate-900/40">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white transition flex items-center justify-center gap-2 border border-slate-700"
              >
                <FaGithub className="text-base" />
                <span>View Source Code</span>
              </a>

              {project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <FaArrowUpRightFromSquare className="text-xs" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-400 hover:text-white transition"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
