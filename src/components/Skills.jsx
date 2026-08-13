import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, 
  FaCode, FaGitAlt, FaGithub, FaAws, FaPlug, FaWrench, FaListCheck, FaCircleCheck 
} from 'react-icons/fa6';
import { 
  SiJavascript, SiC, SiCplusplus, SiExpress, SiTailwindcss, SiMysql, 
  SiMongodb, SiNetlify 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  FaJava: <FaJava className="text-orange-500" />,
  FaPython: <FaPython className="text-yellow-500" />,
  SiJavascript: <SiJavascript className="text-amber-400" />,
  SiC: <SiC className="text-blue-400" />,
  SiCplusplus: <SiCplusplus className="text-sky-500" />,
  FaPhp: <FaPhp className="text-indigo-400" />,
  FaReact: <FaReact className="text-cyan-400" />,
  FaNodeJs: <FaNodeJs className="text-emerald-500" />,
  SiExpress: <SiExpress className="text-slate-300" />,
  FaHtml5: <FaHtml5 className="text-orange-600" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-500" />,
  SiTailwindcss: <SiTailwindcss className="text-cyan-400" />,
  SiMysql: <SiMysql className="text-blue-500" />,
  SiMongodb: <SiMongodb className="text-emerald-500" />,
  SiOracle: <FaDatabase className="text-rose-500" />,
  FaDatabase: <FaDatabase className="text-purple-400" />,
  FaCode: <FaCode className="text-indigo-400" />,
  FaGitAlt: <FaGitAlt className="text-orange-500" />,
  FaGithub: <FaGithub className="text-white" />,
  TbBrandVscode: <TbBrandVscode className="text-blue-400" />,
  FaAws: <FaAws className="text-amber-500" />,
  SiNetlify: <SiNetlify className="text-teal-400" />,
  FaPlug: <FaPlug className="text-indigo-400" />
};

export default function Skills({ darkMode }) {
  const [activeTab, setActiveTab] = useState('all');

  // Flattened list for "All" tab or filtered list
  const filteredSkills = activeTab === 'all' 
    ? skillCategories.flatMap(cat => cat.skills)
    : skillCategories.find(cat => cat.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaWrench className="text-xs" />
            <span>Technical Expertise</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive overview of programming languages, web stacks, database management systems, and developer tools in my tech stack.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : darkMode
                ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
            }`}
          >
            All Skills ({skillCategories.flatMap(c => c.skills).length})
          </button>

          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.name} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode 
                  ? 'glass-card-dark hover:border-blue-500/40 hover:shadow-lg' 
                  : 'glass-card-light hover:border-blue-500/30 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/60 dark:bg-slate-800/90 border border-slate-700/50 flex items-center justify-center text-xl shadow-inner">
                    {iconMap[skill.icon] || <FaCode className="text-blue-500" />}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-blue-500 font-semibold">{skill.category}</span>
                  </div>
                </div>

                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  darkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {skill.level >= 88 ? 'Advanced' : skill.level >= 80 ? 'Proficient' : 'Familiar'}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-slate-200/50 dark:bg-slate-800/70 h-2 rounded-full overflow-hidden p-0.5 border border-slate-300/30 dark:border-slate-700/50">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.03 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categorized Visual Overview Cards when viewing "All Skills" */}
        {activeTab === 'all' && (
          <div className="mt-16 pt-12 border-t border-slate-200/50 dark:border-slate-800/60">
            <h3 className={`text-center text-xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Skills Organized by Domain
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat) => (
                <div 
                  key={cat.id}
                  className={`p-6 rounded-2xl border ${
                    darkMode ? 'glass-panel-dark' : 'glass-panel-light'
                  }`}
                >
                  <h4 className="text-base font-extrabold text-blue-500 mb-4 pb-2 border-b border-blue-500/20 flex items-center gap-2">
                    <FaCircleCheck className="text-xs" />
                    <span>{cat.name}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.skills.map((s) => (
                      <li key={s.name} className="flex items-center justify-between text-xs">
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {s.name}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {s.category}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
