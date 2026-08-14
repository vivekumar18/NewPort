import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaCircleCheck, FaLaptopCode, FaWandMagicSparkles } from 'react-icons/fa6';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ darkMode, onOpenHireMe, onDownloadResume }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border ${
                darkMode 
                  ? 'bg-slate-800/80 text-blue-400 border-blue-500/30' 
                  : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Developer Roles</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className={darkMode ? 'gradient-text' : 'gradient-text-light'}>{personalDetails.name}</span> 👋
            </h1>

            {/* Title / Role */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {personalDetails.title}
              </span>
            </div>

            {/* Short Bio */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {personalDetails.tagline}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Work */}
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <span>View My Work</span>
                <FaArrowRight className="text-xs" />
              </a>

              {/* Download Resume */}
              <button
                onClick={onDownloadResume}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 flex items-center justify-center gap-2.5 ${
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
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/40 dark:border-slate-800/60 w-full">
              <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                    darkMode 
                      ? 'bg-slate-800/80 border-slate-700 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500' 
                      : 'bg-slate-100 border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                  }`}
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                    darkMode 
                      ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white' 
                      : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href={`mailto:${personalDetails.email}`}
                  aria-label="Email"
                  className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                    darkMode 
                      ? 'bg-slate-800/80 border-slate-700 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500' 
                      : 'bg-slate-100 border-slate-200 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600'
                  }`}
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Visual Card */}
              <div className={`relative rounded-3xl p-4 overflow-hidden border shadow-2xl ${
                darkMode ? 'glass-panel-dark' : 'glass-panel-light'
              }`}>
                
                {/* Top Code Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/40 dark:border-slate-700/50 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                    <FaLaptopCode className="text-blue-500" /> vivek-developer.js
                  </span>
                  <span className="w-12"></span>
                </div>

                {/* Avatar Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-4 group aspect-square">
                  <img 
                    src={personalDetails.avatar} 
                    alt="Vivek Kumar - Full Stack Developer" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
                        <FaCode />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Vivek Kumar</p>
                        <p className="text-[11px] text-slate-400">MCA • Graphic Era Univ.</p>
                      </div>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                      CGPA 8.0 / 10
                    </span>
                  </div>
                </div>

                {/* Mini Live Code Snippet */}
                <div className={`p-3.5 rounded-xl font-mono text-xs overflow-x-auto ${
                  darkMode ? 'bg-slate-950/90 text-slate-300 border border-slate-800' : 'bg-slate-900 text-slate-200'
                }`}>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-indigo-300">name</span>: <span className="text-emerald-300">"Vivek Kumar"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-300">degree</span>: <span className="text-emerald-300">"MCA Graduate"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-300">stack</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>, <span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"Python"</span>],</p>
                  <p className="pl-4"><span className="text-indigo-300">seeking</span>: <span className="text-emerald-300">"Software Engineer Roles"</span></p>
                  <p>&#125;;</p>
                </div>

              </div>

              {/* Floating tech badge pill top right */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 hidden sm:flex border border-white/20 animate-bounce" style={{ animationDuration: '4s' }}>
                <FaWandMagicSparkles className="text-amber-300 text-sm" />
                <span className="text-xs font-bold">Full Stack Engineer</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
