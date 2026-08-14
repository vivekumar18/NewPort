import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFilePdf, FaDownload, FaEye, FaGraduationCap, FaBriefcase, FaCode, 
  FaEnvelope, FaPhone, FaLocationDot, FaXmark, FaCheck, FaAward, FaArrowUpRightFromSquare 
} from 'react-icons/fa6';
import { personalDetails, education, experience, skillCategories } from '../data/portfolioData';

export default function Resume({ darkMode, onDownloadResume }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Visual Resume CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative rounded-3xl p-8 sm:p-12 overflow-hidden border shadow-2xl ${
            darkMode ? 'glass-panel-dark' : 'glass-panel-light'
          }`}
        >
          {/* Background Ambient Gradient Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-4 border border-blue-500/20">
                <FaFilePdf className="text-sm text-red-500" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Ready for <span className="text-blue-500">Recruiter Review</span>
              </h2>

              <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Download or inspect my complete curriculum vitae detailing academic achievements, software projects, full-stack internships, and technical certifications.
              </p>

              {/* Quick Resume Highlights Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center gap-2.5 text-xs">
                  <FaGraduationCap className="text-blue-400 text-base shrink-0" />
                  <div>
                    <strong className="block text-white">MCA Graduate</strong>
                    <span className="text-[11px] text-slate-400">8.0 / 10 CGPA</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center gap-2.5 text-xs">
                  <FaBriefcase className="text-indigo-400 text-base shrink-0" />
                  <div>
                    <strong className="block text-white">Full-Stack Intern</strong>
                    <span className="text-[11px] text-slate-400">2 Internships</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center gap-2.5 text-xs">
                  <FaCode className="text-emerald-400 text-base shrink-0" />
                  <div>
                    <strong className="block text-white">Core Languages</strong>
                    <span className="text-[11px] text-slate-400">Java, Python, JS</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onDownloadResume}
                  className="px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-3"
                >
                  <FaDownload className="text-base" />
                  <span>Download Resume PDF</span>
                </button>

                <button
                  onClick={() => setShowPreview(true)}
                  className={`px-7 py-4 rounded-2xl font-bold text-sm border transition flex items-center gap-2.5 ${
                    darkMode
                      ? 'bg-slate-800/80 border-slate-700 text-white hover:bg-slate-700'
                      : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <FaEye className="text-blue-500" />
                  <span>View Online Resume</span>
                </button>
              </div>
            </div>

            {/* Right Graphic Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setShowPreview(true)}
                className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700/80 p-5 shadow-2xl cursor-pointer hover:border-blue-500/50 transition group"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <FaFilePdf className="text-red-500 text-sm" />
                    <span>Vivek_Kumar_Resume.pdf</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">VERIFIED</span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base text-white group-hover:text-blue-400 transition">Vivek Kumar</h3>
                    <p className="text-xs text-blue-500 font-semibold">Full Stack Developer | MCA</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      <FaLocationDot className="text-rose-400 text-[10px]" /> Noida, UP, India
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950 text-[11px] text-slate-300 font-mono line-clamp-3">
                    "Passionate software developer with background in MCA, React, Java, Python, databases, and REST APIs."
                  </div>

                  <div className="pt-2 text-xs flex justify-between items-center text-blue-400 font-bold">
                    <span>Click to view full preview</span>
                    <FaEye />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Online Resume Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreview(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-800 text-white p-4 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                      <FaFilePdf />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold">Resume Preview</h3>
                      <p className="text-[11px] sm:text-xs text-blue-400 font-medium">Vivek Kumar • MCA Software Developer</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition sm:hidden"
                  >
                    <FaXmark className="text-lg" />
                  </button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="/resume/Vivek-Kumar-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <FaArrowUpRightFromSquare className="text-xs text-blue-400" />
                    <span>Open PDF</span>
                  </a>
                  <button
                    onClick={onDownloadResume}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <FaDownload /> Download
                  </button>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition hidden sm:block"
                  >
                    <FaXmark className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Printable Style Resume View */}
              <div className="bg-slate-950 p-4 sm:p-8 rounded-2xl border border-slate-800 space-y-6 text-slate-200">
                
                {/* Header Info */}
                <div className="text-center pb-6 border-b border-slate-800">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">VIVEK KUMAR</h1>
                  <p className="text-xs sm:text-sm font-bold text-blue-400 mt-1">MCA GRADUATE | FULL STACK DEVELOPER</p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-slate-400 mt-3">
                    <span>Noida, Uttar Pradesh, India</span>
                    <span className="hidden sm:inline">•</span>
                    <a href={`mailto:${personalDetails.email}`} className="hover:text-blue-400 transition">{personalDetails.email}</a>
                    <span className="hidden sm:inline">•</span>
                    <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
                    <span className="hidden sm:inline">•</span>
                    <a href={personalDetails.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                  </div>
                </div>

                {/* Objective */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-2 border-b border-slate-800 pb-1">
                    PROFESSIONAL SUMMARY
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Aspiring Full Stack Developer with hands-on experience in building responsive web applications using Java, JavaScript, React.js, Node.js, and MySQL. Skilled in developing RESTful APIs and scalable solutions. Seeking an opportunity to contribute to real-world software engineering projects.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-3 border-b border-slate-800 pb-1">
                    EDUCATION
                  </h4>
                  <div className="space-y-4">
                    {(education || []).map((edu, idx) => (
                      <div key={edu.id || idx} className="text-xs flex flex-col sm:flex-row sm:items-start justify-between gap-1 pb-3 border-b border-slate-900/80 last:border-0 last:pb-0">
                        <div>
                          <strong className="text-white block text-xs sm:text-sm font-extrabold">{edu.degree}</strong>
                          <span className="text-slate-400 text-[11px] sm:text-xs">{edu.institution}</span>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 mt-1 sm:mt-0">
                          <span className="font-bold text-emerald-400 text-xs whitespace-nowrap bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{edu.grade}</span>
                          <span className="text-slate-400 text-[10px] sm:text-[11px] whitespace-nowrap">{edu.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-3 border-b border-slate-800 pb-1">
                    INTERNSHIP EXPERIENCE
                  </h4>
                  <div className="space-y-4">
                    {(experience || []).map((exp, idx) => {
                      const bullets = Array.isArray(exp.responsibilities)
                        ? exp.responsibilities
                        : (Array.isArray(exp.description) ? exp.description : [exp.description].filter(Boolean));

                      return (
                        <div key={exp.id || idx} className="text-xs pb-3 border-b border-slate-900/80 last:border-0 last:pb-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                            <strong className="text-white text-xs sm:text-sm font-extrabold">{exp.role}</strong>
                            <span className="text-slate-400 text-[11px] font-medium">{exp.company} • {exp.period || exp.duration}</span>
                          </div>
                          {bullets.length > 0 && (
                            <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                              {bullets.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-2 border-b border-slate-800 pb-1">
                    TECHNICAL SKILLS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <p><strong className="text-white">Programming Languages:</strong> Java, Python, JavaScript, C, C++</p>
                    <p><strong className="text-white">Web & Cloud:</strong> React.js, Node.js, Express.js, HTML5, CSS3, REST APIs, AWS Cloud</p>
                    <p><strong className="text-white">Databases:</strong> MySQL, MongoDB, Oracle DB</p>
                    <p><strong className="text-white">Tools & Practices:</strong> Git, GitHub, VS Code, Jira, SolarWinds, Agile SDLC</p>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
