import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaDatabase, 
  FaCode, FaGitAlt, FaAws, FaPlug, FaWrench, FaListCheck, FaBrain, FaServer
} from 'react-icons/fa6';
import { 
  SiJavascript, SiCplusplus, SiMysql, SiMongodb 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { skillCategories } from '../data/portfolioData';

const techIconMap = {
  java: <FaJava className="text-orange-500" />,
  js: <SiJavascript className="text-amber-400" />,
  cpp: <SiCplusplus className="text-sky-500" />,
  python: <FaPython className="text-yellow-500" />,
  react: <FaReact className="text-cyan-400" />,
  node: <FaNodeJs className="text-emerald-500" />,
  api: <FaPlug className="text-indigo-400" />,
  html: <FaHtml5 className="text-orange-600" />,
  aws: <FaAws className="text-amber-500" />,
  mysql: <SiMysql className="text-blue-500" />,
  mongodb: <SiMongodb className="text-emerald-500" />,
  oracle: <FaDatabase className="text-rose-500" />,
  dsa: <FaBrain className="text-purple-400" />,
  cs: <FaServer className="text-blue-400" />,
  git: <FaGitAlt className="text-orange-500" />,
  vscode: <TbBrandVscode className="text-blue-400" />,
  jira: <FaWrench className="text-slate-400" />,
  agile: <FaListCheck className="text-teal-400" />,
};

const getBadgeStyle = (level, darkMode) => {
  if (level === 'Proficient') {
    return darkMode 
      ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' 
      : 'bg-blue-50 text-blue-700 border-blue-200';
  }
  if (level === 'Intermediate') {
    return darkMode 
      ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' 
      : 'bg-indigo-50 text-indigo-700 border-indigo-200';
  }
  return darkMode 
    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
    : 'bg-emerald-50 text-emerald-700 border-emerald-200';
};

export default function Skills({ darkMode }) {
  const [activeTab, setActiveTab] = useState('all');

  const rawSkills = activeTab === 'all' 
    ? skillCategories.flatMap(cat => cat.skills)
    : skillCategories.find(cat => cat.id === activeTab)?.skills || [];

  // Sort: Proficient on top, Intermediate in middle, Working Knowledge at bottom
  const filteredSkills = [...rawSkills].sort((a, b) => b.percentage - a.percentage);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaWrench className="text-xs" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>
          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A realistic breakdown of programming languages, web engineering stacks, database systems, and software engineering tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
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
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode 
                  ? 'glass-card-dark hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10' 
                  : 'glass-card-light hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 dark:bg-slate-800/90 border border-slate-700/50 flex items-center justify-center text-xl shadow-inner">
                    {techIconMap[skill.icon] || <FaCode className="text-blue-500" />}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${getBadgeStyle(skill.level, darkMode)}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Proficiency</span>
                  <span className="font-mono text-blue-400 font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200/50 dark:bg-slate-800/70 h-2 rounded-full overflow-hidden p-0.5 border border-slate-300/30 dark:border-slate-700/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.03 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Domain Groups Summary */}
        {activeTab === 'all' && (
          <div className="mt-16 pt-12 border-t border-slate-200/50 dark:border-slate-800/60">
            <h3 className={`text-center text-xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Skills Grouped by Specialty
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat) => (
                <div 
                  key={cat.id}
                  className={`p-5 rounded-2xl border ${
                    darkMode ? 'glass-panel-dark' : 'glass-panel-light'
                  }`}
                >
                  <h4 className="text-sm font-extrabold text-blue-500 mb-3 pb-2 border-b border-blue-500/20 flex items-center justify-between">
                    <span>{cat.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono">
                      {cat.skills.length}
                    </span>
                  </h4>
                  <ul className="space-y-2">
                    {cat.skills.map((s) => (
                      <li key={s.name} className="flex items-center justify-between text-xs">
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {s.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {s.level}
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
