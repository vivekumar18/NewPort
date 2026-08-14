import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBrain, 
  FaLayerGroup, 
  FaDatabase, 
  FaMobileScreen, 
  FaPlug, 
  FaPeopleGroup, 
  FaUserCheck, 
  FaCertificate, 
  FaCodeBranch, 
  FaXmark,
  FaCheck
} from 'react-icons/fa6';
import { personalDetails, aboutHighlights, stats } from '../data/portfolioData';

const iconMap = {
  FaBrain: <FaBrain className="text-blue-500" />,
  FaLayerGroup: <FaLayerGroup className="text-indigo-500" />,
  FaDatabase: <FaDatabase className="text-purple-500" />,
  FaMobileScreen: <FaMobileScreen className="text-cyan-500" />,
  FaPlug: <FaPlug className="text-emerald-500" />,
  FaPeopleGroup: <FaPeopleGroup className="text-amber-500" />,
  FaGraduationCap: <FaGraduationCap className="text-rose-500" />
};

export default function About({ darkMode }) {
  const [showBioModal, setShowBioModal] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaUserCheck className="text-xs" />
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Passionate Software Engineer & <span className="text-blue-500">MCA Graduate</span>
          </h2>
          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Equipped with strong theoretical fundamentals and hands-on full-stack development experience. Dedicated to building efficient, maintainable software and scalable web applications.
          </p>
        </div>

        {/* Top Stat Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode 
                  ? 'glass-card-dark hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5' 
                  : 'glass-card-light hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">{stat.label}</p>
              <h3 className={`text-xl sm:text-2xl font-black mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Highlights Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Detailed Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-5 p-8 rounded-3xl border flex flex-col justify-between ${
              darkMode ? 'glass-panel-dark' : 'glass-panel-light'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-2xl font-bold border border-blue-500/20">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Background & Education
                  </h3>
                  <p className="text-xs text-blue-500 font-semibold">Graphic Era University • MCA</p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                I hold a <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Master of Computer Applications (MCA)</strong> degree from Graphic Era (Deemed to be University), Dehradun, graduating with a high academic score of <strong className="text-blue-500">8.0 / 10 CGPA</strong>.
              </p>

              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Throughout my academic journey and practical software internships at <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Happieloop Technology</strong> and <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Oasis Infobyte</strong>, I have focused on full-stack web engineering, database architecture, and object-oriented software design.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800">
              <button
                onClick={() => setShowBioModal(true)}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 border border-blue-500/20 flex items-center justify-center gap-2"
              >
                <span>Read Full Professional Bio</span>
                <FaCodeBranch />
              </button>
            </div>
          </motion.div>

          {/* Core Competencies Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item, idx) => (
              <div
                key={item.title}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? 'glass-card-dark' : 'glass-card-light'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/10 dark:bg-slate-800 flex items-center justify-center text-xl mb-3">
                  {iconMap[item.icon] || <FaBrain className="text-blue-500" />}
                </div>
                <h4 className={`text-base font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {showBioModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBioModal(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border ${
                darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-xl">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vivek Kumar - Developer Profile</h3>
                    <p className="text-xs text-blue-500 font-semibold">Full Stack & Software Engineering Candidate</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBioModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <FaXmark className="text-xl" />
                </button>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300 dark:text-slate-300">
                <p>
                  <strong>Vivek Kumar</strong> is a dedicated software developer based in Noida, Uttar Pradesh. Having completed his Master of Computer Applications (MCA) at Graphic Era University with a 8.0 / 10 CGPA, Vivek brings a solid foundation in computer science theory and modern software engineering practices.
                </p>
                <p>
                  His technical skill set spans full-stack web development (React.js, Node.js, Express.js, PHP, HTML5/CSS3, Tailwind CSS), object-oriented desktop programming (Java, Java Swing), scripting & automation (Python), relational database modeling (MySQL, Oracle, SQL/PL-SQL), and NoSQL architectures (MongoDB).
                </p>
                <p>
                  Having completed internships at <strong>Happieloop Technology</strong> and <strong>Oasis Infobyte</strong>, Vivek has hands-on experience building production UIs, integrating asynchronous REST APIs, and writing clean, scalable code.
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2">Core Engineering Strengths</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="flex items-center gap-2 p-2 rounded bg-slate-800/40 border border-slate-800">
                      <FaCheck className="text-emerald-400" /> Web UI & Component Architecture
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded bg-slate-800/40 border border-slate-800">
                      <FaCheck className="text-emerald-400" /> RESTful API Design & Integration
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded bg-slate-800/40 border border-slate-800">
                      <FaCheck className="text-emerald-400" /> Relational & NoSQL Databases
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded bg-slate-800/40 border border-slate-800">
                      <FaCheck className="text-emerald-400" /> Java & Python Desktop Software
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setShowBioModal(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
