import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaLaptopCode, FaWandMagicSparkles, FaGraduationCap, FaBriefcase, FaFolderOpen, FaAward } from 'react-icons/fa6';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ darkMode, onOpenHireMe, onDownloadResume }) {
  return (
    <section id="home" className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background ambient glow shapes - subtle & professional */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
          
          {/* Left Hero Content (approx 55% width) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
                darkMode 
                  ? 'bg-slate-800/80 text-blue-400 border-blue-500/30' 
                  : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Developer Roles</span>
            </motion.div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-2.5">
              Hi, I'm <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>{personalDetails.name}</span> 👋
            </h1>

            {/* Primary Subtitle */}
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Full Stack Developer
            </h2>

            {/* Supporting Bio Line */}
            <p className={`text-base sm:text-lg leading-relaxed mb-6 max-w-2xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Building scalable web applications, RESTful APIs & enterprise software.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              {/* Primary CTA - View Work */}
              <a
                href="#projects"
                className="w-full sm:w-auto h-11 sm:h-12 px-6 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <FaArrowRight className="text-xs" />
              </a>

              {/* Download Resume */}
              <button
                onClick={onDownloadResume}
                className={`w-full sm:w-auto h-11 sm:h-12 px-5 rounded-xl font-semibold text-xs sm:text-sm border transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                  darkMode 
                    ? 'bg-slate-800/80 border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600' 
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <FaDownload className="text-xs text-blue-500" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className={`w-full sm:w-auto h-11 sm:h-12 px-5 rounded-xl font-semibold text-xs sm:text-sm border transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Channels & Stat Chips */}
            <div className="w-full pt-4 border-t border-slate-200/40 dark:border-slate-800/60 space-y-3.5">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Connect with me:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                      darkMode 
                        ? 'bg-slate-800/80 border-slate-700 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500' 
                        : 'bg-slate-100 border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                    }`}
                  >
                    <FaLinkedin className="text-base" />
                  </a>

                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                      darkMode 
                        ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white' 
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <FaGithub className="text-base" />
                  </a>

                  <a
                    href={`mailto:${personalDetails.email}`}
                    aria-label="Email"
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                      darkMode 
                        ? 'bg-slate-800/80 border-slate-700 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500' 
                        : 'bg-slate-100 border-slate-200 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600'
                    }`}
                  >
                    <FaEnvelope className="text-base" />
                  </a>
                </div>
              </div>

              {/* Quick Stat Chips Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <FaGraduationCap className="text-blue-500 text-base shrink-0" />
                  <div>
                    <p className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>8.0 / 10</p>
                    <p className="text-[10px] text-slate-400 font-semibold">MCA CGPA</p>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <FaBriefcase className="text-indigo-400 text-base shrink-0" />
                  <div>
                    <p className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>2 Internships</p>
                    <p className="text-[10px] text-slate-400 font-semibold">Full Stack</p>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <FaFolderOpen className="text-emerald-400 text-base shrink-0" />
                  <div>
                    <p className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>4 Projects</p>
                    <p className="text-[10px] text-slate-400 font-semibold">Live & GitHub</p>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <FaAward className="text-amber-400 text-base shrink-0" />
                  <div>
                    <p className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>3 Verified</p>
                    <p className="text-[10px] text-slate-400 font-semibold">Certificates</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual Area (approx 45% width) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] lg:max-w-none">
              
              {/* Subtle outer ring shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-15 pointer-events-none"></div>

              {/* Main Developer Visual Panel */}
              <div className={`relative rounded-3xl p-3.5 sm:p-4 overflow-hidden border shadow-xl ${
                darkMode ? 'glass-panel-dark' : 'glass-panel-light'
              }`}>
                
                {/* Top Window Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/40 dark:border-slate-700/50 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 flex items-center gap-1.5">
                    <FaLaptopCode className="text-blue-500" /> vivek-developer.js
                  </span>
                  <span className="w-10"></span>
                </div>

                {/* Avatar Image Frame */}
                <div className="relative rounded-2xl overflow-hidden mb-3 group aspect-[4/5] bg-slate-950">
                  <img 
                    src={personalDetails.avatar} 
                    alt="Vivek Kumar - Full Stack Developer" 
                    className="w-full h-full object-cover object-[85%_15%] transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/50 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400 text-xs">
                        <FaCode />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-tight">Vivek Kumar</p>
                        <p className="text-[10px] text-slate-400">MCA • Graphic Era Univ.</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      CGPA 8.0 / 10
                    </span>
                  </div>
                </div>

                {/* Mini Developer Code Snippet */}
                <div className={`p-3 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto ${
                  darkMode ? 'bg-slate-950/90 text-slate-300 border border-slate-800' : 'bg-slate-900 text-slate-200'
                }`}>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-3"><span className="text-indigo-300">name</span>: <span className="text-emerald-300">"Vivek Kumar"</span>,</p>
                  <p className="pl-3"><span className="text-indigo-300">role</span>: <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-3"><span className="text-indigo-300">stack</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>, <span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"MySQL"</span>],</p>
                  <p className="pl-3"><span className="text-indigo-300">status</span>: <span className="text-emerald-300 font-bold">"Open to Opportunities"</span></p>
                  <p>&#125;;</p>
                </div>

              </div>

              {/* Floating tech badge pill top right */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 hidden sm:flex border border-white/20">
                <FaWandMagicSparkles className="text-amber-300 text-xs" />
                <span className="text-[11px] font-bold">Full Stack Engineer</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
