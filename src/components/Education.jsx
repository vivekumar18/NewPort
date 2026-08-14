import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCalendarDays, FaAward, FaCheck } from 'react-icons/fa6';
import { education } from '../data/portfolioData';

export default function Education({ darkMode }) {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaGraduationCap className="text-xs" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Education & <span className="text-blue-500">Academic Excellence</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Strong academic background in Computer Applications with high academic scores.
          </p>
        </div>

        {/* Vertical Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {(education || []).map((item, idx) => {
            const highlightPoints = Array.isArray(item.highlights)
              ? item.highlights
              : (Array.isArray(item.details) ? item.details : (item.details ? [item.details] : []));

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl ${
                  darkMode ? 'glass-panel-dark' : 'glass-panel-light'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200/50 dark:border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl shrink-0 shadow-lg shadow-blue-500/20">
                      {idx === 0 ? <FaGraduationCap /> : <FaSchool />}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 inline-block mb-1">
                        {item.badge || (idx === 0 ? 'Master Degree' : idx === 1 ? 'Bachelor Degree' : 'Senior Secondary')}
                      </span>
                      <h3 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.degree}
                      </h3>
                      <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.institution} {item.location ? `• ${item.location}` : ''}
                      </p>
                    </div>
                  </div>

                  {/* Score Pill & Period */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <FaAward className="text-emerald-400" />
                      <span>{item.grade}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <FaCalendarDays className="text-blue-500" /> {item.period}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {highlightPoints.length > 0 && (
                  <ul className="space-y-2">
                    {highlightPoints.map((point, i) => (
                      <li key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        <div className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                          <FaCheck className="text-[9px]" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
