import React from 'react';
import { FaCode, FaGithub, FaLinkedin, FaEnvelope, FaAngleUp, FaShieldHalved } from 'react-icons/fa6';
import { personalDetails } from '../data/portfolioData';

export default function Footer({ darkMode, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t pt-16 pb-12 ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60 dark:border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                <FaCode />
              </div>
              <span className={`font-extrabold text-xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Vivek<span className="text-blue-500">.dev</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Full Stack Software Developer & MCA Graduate from Graphic Era University. Dedicated to building high-performance, user-centered applications.
            </p>

            <p className="text-xs text-blue-500 font-semibold">
              Based in Noida, Uttar Pradesh, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Navigation Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition">About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition">Skills Stacks</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-500 transition">Internships</a></li>
              <li><a href="#education" className="hover:text-blue-500 transition">Education</a></li>
              <li><a href="#certifications" className="hover:text-blue-500 transition">Certifications</a></li>
              <li><a href="#resume" className="hover:text-blue-500 transition">Resume PDF</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact Me</a></li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-3">
            <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Connect Online
            </h4>
            
            <div className="flex items-center gap-3 mb-6">
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-3 rounded-xl border transition ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white' : 'bg-white border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`p-3 rounded-xl border transition ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email"
                className={`p-3 rounded-xl border transition ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white' : 'bg-white border-slate-200 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                }`}
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600/10 text-blue-500 hover:bg-blue-500 hover:text-white transition border border-blue-500/20"
            >
              <span>Back to Top</span>
              <FaAngleUp />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Vivek Kumar. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-blue-500 transition"
              title="Open Admin Messages Dashboard"
            >
              <FaShieldHalved className="text-blue-500 text-xs" />
              <span>Admin Messages</span>
            </button>
            <span>•</span>
            <p className="flex items-center gap-1.5 text-slate-400">
              <span>Engineered with React.js & Supabase</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
