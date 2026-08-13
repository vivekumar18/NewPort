import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarDays, FaLocationDot, FaCheck, FaLightbulb } from 'react-icons/fa6';
import { experience } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaBriefcase className="text-xs" />
            <span>Work Experience</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Internships & <span className="text-blue-500">Practical Projects</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hands-on software development experience gaining industry standards, API design, frontend UIs, and team collaboration workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-4 border-slate-900 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                    <FaBriefcase className="text-xs" />
                  </div>

                  {/* Card Container */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pl-10' : 'sm:pr-10'} w-full`}>
                    <div className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl ${
                      darkMode ? 'glass-panel-dark' : 'glass-panel-light'
                    }`}>
                      
                      {/* Role & Company */}
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white inline-block mb-2">
                            {item.type}
                          </span>
                          <h3 className={`text-lg sm:text-xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-2 text-xs font-semibold text-blue-500 mt-1">
                            <FaBuilding />
                            <span>{item.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-start sm:items-end text-[11px] text-slate-400 space-y-1">
                          <span className="flex items-center gap-1.5 font-medium">
                            <FaCalendarDays className="text-blue-500" /> {item.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaLocationDot className="text-rose-400" /> {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Brief description */}
                      <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.description}
                      </p>

                      {/* Responsibilities Bullet points */}
                      <div className="space-y-2 mb-4">
                        <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                          Key Responsibilities:
                        </h4>
                        {item.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <div className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                              <FaCheck className="text-[9px]" />
                            </div>
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learning Outcomes Box */}
                      <div className={`p-3 rounded-xl mb-4 border flex items-start gap-2.5 text-xs ${
                        darkMode ? 'bg-slate-800/60 border-slate-700/60 text-slate-300' : 'bg-blue-50/70 border-blue-200/70 text-slate-800'
                      }`}>
                        <FaLightbulb className="text-amber-400 text-sm shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[11px] uppercase tracking-wider text-blue-500 mb-0.5">Outcomes & Impact:</strong>
                          <span>{item.outcomes}</span>
                        </div>
                      </div>

                      {/* Tech stack used */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/40 dark:border-slate-800">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                              darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
