import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaAws, FaSquareCheck, FaArrowUpRightFromSquare, FaXmark, FaCertificate, FaShieldHalved } from 'react-icons/fa6';
import { SiHackerrank } from 'react-icons/si';
import { certifications } from '../data/portfolioData';

export default function Certifications({ darkMode }) {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaAward className="text-xs" />
            <span>Verified Credentials</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional <span className="text-blue-500">Certifications</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Industry certifications validated in Cloud Architecture, Artificial Intelligence, Generative AI, and JavaScript engineering.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const isAws = cert.issuer.includes('AWS') || cert.issuer.includes('Amazon');
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  darkMode 
                    ? 'glass-card-dark hover:border-blue-500/40 hover:shadow-xl' 
                    : 'glass-card-light hover:border-blue-500/30 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                      isAws 
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                        : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                    }`}>
                      {isAws ? <FaAws /> : <SiHackerrank />}
                    </div>

                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      {cert.year}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    {cert.badge}
                  </span>

                  <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-500 mb-3">
                    {cert.issuer}
                  </p>

                  <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-800/10 dark:bg-slate-800 text-blue-500 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700"
                  >
                    <FaCertificate /> View Certificate Details
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certification Details Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border ${
                darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl">
                    <FaShieldHalved />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Verified Certification</h3>
                    <p className="text-xs text-blue-500 font-semibold">{activeCert.issuer}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <FaXmark className="text-xl" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                  <h4 className="text-base font-extrabold text-white mb-1">{activeCert.title}</h4>
                  <p className="text-xs text-slate-400">Issued Year: {activeCert.year} • {activeCert.badge}</p>
                </div>

                <p className="text-xs leading-relaxed text-slate-300">
                  {activeCert.description}
                </p>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <FaSquareCheck className="text-sm shrink-0" />
                  <span>Credential verified for candidate: Vivek Kumar</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition flex items-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <FaArrowUpRightFromSquare className="text-xs" />
                  <span>Verify Issuer Portal</span>
                </a>

                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-400 hover:text-white transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
