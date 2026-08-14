import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarDays, FaLocationDot, FaCheck, FaLightbulb } from 'react-icons/fa6';
import { experience } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaBriefcase className="text-xs" />
            <span>Work Experience</span>
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Internships & <span className="text-blue-500">Practical Experience</span>
          </h2>
          <p className={`text-xs sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hands-on software engineering experience building responsive applications, designing REST APIs, and managing databases.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (left aligned on mobile, centered on desktop) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300/70 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {(experience || []).map((item, idx) => {
              const isEven = idx % 2 === 0;
              const bullets = Array.isArray(item.responsibilities) 
                ? item.responsibilities 
                : (Array.isArray(item.description) ? item.description : [item.description].filter(Boolean));
              const techList = item.skills || item.technologies || [];

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 sm:border-4 border-slate-900 text-white flex items-center justify-center shadow-md shadow-blue-500/30 z-10">
                    <FaBriefcase className="text-[10px] sm:text-xs" />
                  </div>

                  {/* Card Container */}
                  <div className={`ml-10 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pl-8 lg:pl-10' : 'sm:pr-8 lg:pr-10'} w-[calc(100%-2.5rem)] sm:w-1/2`}>
                    <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl ${
                      darkMode ? 'glass-panel-dark' : 'glass-panel-light'
                    }`}>
                      
                      {/* Role & Company Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white inline-block mb-1.5">
                            {item.type || 'Internship'}
                          </span>
                          <h3 className={`text-base sm:text-xl font-extrabold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-500 mt-1">
                            <FaBuilding className="shrink-0 text-xs" />
                            <span>{item.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap sm:flex-col items-center sm:items-end gap-x-3 gap-y-1 text-[11px] text-slate-400 mt-1 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-200/40 dark:border-slate-800">
                          <span className="flex items-center gap-1 font-medium">
                            <FaCalendarDays className="text-blue-500 shrink-0" /> {item.period || item.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaLocationDot className="text-rose-400 shrink-0" /> {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities Bullet Points */}
                      {bullets.length > 0 && (
                        <div className="space-y-2.5 mb-4 mt-3">
                          <h4 className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                            Key Responsibilities:
                          </h4>
                          {bullets.map((resp, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                              <div className="w-4 h-4 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                                <FaCheck className="text-[9px]" />
                              </div>
                              <span className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{resp}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Outcomes Box */}
                      {item.outcomes && (
                        <div className={`p-3 rounded-xl mb-3.5 border flex items-start gap-2 text-xs ${
                          darkMode ? 'bg-slate-800/60 border-slate-700/60 text-slate-300' : 'bg-blue-50/70 border-blue-200/70 text-slate-800'
                        }`}>
                          <FaLightbulb className="text-amber-400 text-sm shrink-0 mt-0.5" />
                          <div>
                            <strong className="block text-[10px] uppercase tracking-wider text-blue-500 mb-0.5">Outcomes & Impact:</strong>
                            <span className="leading-relaxed">{item.outcomes}</span>
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      {techList.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/40 dark:border-slate-800">
                          {techList.map((s) => (
                            <span
                              key={s}
                              className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold border ${
                                darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

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
