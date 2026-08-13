import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaBriefcase, FaPaperPlane, FaCircleCheck, FaCheck } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

const roleOptions = [
  'Full Stack Software Developer (Full-time)',
  'Frontend Developer (Full-time / Remote)',
  'Backend / Java Developer (Full-time)',
  'IT / Web Development Internship',
  'Contract / Freelance Web Project'
];

export default function HireMeModal({ isOpen, onClose, darkMode }) {
  const [selectedRole, setSelectedRole] = useState(roleOptions[0]);
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recruiterEmail) return;

    setSent(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

    setTimeout(() => {
      setSent(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-lg shadow-lg">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">Hire Vivek Kumar</h3>
                <p className="text-xs text-blue-500 font-semibold">Fast Recruiter Inquiry</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <FaXmark className="text-xl" />
            </button>
          </div>

          {sent ? (
            <div className="py-8 text-center space-y-3">
              <FaCircleCheck className="text-5xl text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you for considering Vivek Kumar for this opportunity. Vivek will review your details and respond promptly at <strong>{recruiterEmail}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  Select Opportunity Type
                </label>
                <div className="space-y-2">
                  {roleOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setSelectedRole(opt)}
                      className={`w-full p-3 rounded-xl text-xs font-semibold text-left border flex items-center justify-between transition ${
                        selectedRole === opt
                          ? 'bg-blue-600/15 border-blue-500 text-blue-400 font-bold'
                          : darkMode
                          ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedRole === opt && <FaCheck className="text-blue-500 text-xs" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={recruiterEmail}
                    onChange={(e) => setRecruiterEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={recruiterCompany}
                    onChange={(e) => setRecruiterCompany(e.target.value)}
                    placeholder="e.g. Acme Corp / Tech HR"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Job location, salary budget, tech requirements..."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:bg-blue-500 transition"
                >
                  <FaPaperPlane />
                  <span>Send Opportunity Inquiry</span>
                </button>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
