import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare, FaEye, FaFolderOpen, FaCheck } from 'react-icons/fa6';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Java / Desktop', 'Full Stack', 'E-Commerce', 'Python / AI'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaFolderOpen className="text-xs" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Innovative <span className="text-blue-500">Applications & Systems</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world projects highlighting full-stack web applications, Java desktop software, e-commerce platforms, and Python AI voice automation.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group rounded-3xl overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode 
                  ? 'glass-panel-dark hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10' 
                  : 'glass-panel-light hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
            >
              {/* Thumbnail Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Overlay Action Buttons on Hover */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg flex items-center gap-2"
                  >
                    <FaEye /> View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition flex items-center gap-2 border border-slate-700"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>

              {/* Project Info Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className={`flex items-center gap-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills & Actions Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                          darkMode 
                            ? 'bg-slate-800/80 text-blue-400 border-slate-700' 
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition flex items-center justify-center gap-2 border border-blue-500/20"
                    >
                      <FaEye /> Details
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl border transition ${
                        darkMode ? 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                      title="GitHub Repository"
                    >
                      <FaGithub className="text-base" />
                    </a>

                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-md"
                        title="Live Demo"
                      >
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Window */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          darkMode={darkMode}
        />

      </div>
    </section>
  );
}
