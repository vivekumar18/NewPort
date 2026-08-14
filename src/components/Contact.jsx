import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, FaLocationDot, 
  FaCircleCheck, FaCircleExclamation, FaCopy, FaCheck 
} from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';
import { submitContactMessage } from '../services/contactService';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const result = await submitContactMessage(formData);
      
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: result.message || 'Thank you! Your message has been sent successfully.'
      });

      // Celebration Effect
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 }
      });

      // Clear Form Fields
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      // Auto dismiss success message after 7 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 7000);
    } catch (err) {
      console.error('Submission Failed:', err);
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please try again.'
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaPaperPlane className="text-xs" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Build Something <span className="text-blue-500">Great Together</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you have a job opportunity, a project proposal, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${darkMode ? 'glass-panel-dark' : 'glass-panel-light'}`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-800/20 border border-slate-700/40">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-lg shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Email Address</p>
                      <a href={`mailto:${personalDetails.email}`} className={`text-xs sm:text-sm font-bold hover:underline ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {personalDetails.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-500 transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <FaCheck className="text-emerald-400 text-sm" /> : <FaCopy className="text-sm" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/20 border border-slate-700/40">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-lg shrink-0">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Current Location</p>
                    <p className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {personalDetails.location}
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/20 border border-slate-700/40 hover:border-blue-500/40 transition group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-lg shrink-0">
                      <FaLinkedin />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">LinkedIn Profile</p>
                      <p className={`text-xs sm:text-sm font-bold group-hover:text-blue-500 transition ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        linkedin.com/in/vivek-kumar-3579841a7
                      </p>
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/20 border border-slate-700/40 hover:border-blue-500/40 transition group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center text-lg shrink-0">
                      <FaGithub />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">GitHub Repositories</p>
                      <p className={`text-xs sm:text-sm font-bold group-hover:text-blue-500 transition ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        github.com/vivekumar18
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Map Widget Box */}
            <div className={`p-6 rounded-3xl border relative overflow-hidden ${darkMode ? 'glass-panel-dark' : 'glass-panel-light'}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <FaLocationDot className="text-rose-500" />
                  <span>Noida, UP, India (Delhi NCR)</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30">
                  IST (UTC+5:30)
                </span>
              </div>
              <div className="h-32 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-indigo-900/20 to-slate-950"></div>
                <div className="relative text-center z-10">
                  <FaLocationDot className="text-3xl text-rose-500 mx-auto mb-1 animate-bounce" />
                  <span className="text-xs font-extrabold text-white">Noida Tech Center</span>
                  <p className="text-[10px] text-slate-400">Open to relocate & remote work</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${darkMode ? 'glass-panel-dark' : 'glass-panel-light'}`}>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill out the form below to submit a message directly to the database.
              </p>

              {/* Success Alert */}
              <AnimatePresence>
                {submitStatus.type === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 flex items-center gap-3"
                  >
                    <FaCircleCheck className="text-xl shrink-0" />
                    <div>
                      <strong className="block text-white font-bold">Message Sent Successfully!</strong>
                      <span>{submitStatus.message}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert */}
              <AnimatePresence>
                {submitStatus.type === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-semibold mb-6 flex items-center gap-3"
                  >
                    <FaCircleExclamation className="text-xl shrink-0" />
                    <div>
                      <strong className="block text-white font-bold">Submission Error</strong>
                      <span>{submitStatus.message}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name 
                          ? 'border-rose-500 bg-rose-500/10' 
                          : darkMode 
                          ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email 
                          ? 'border-rose-500 bg-rose-500/10' 
                          : darkMode 
                          ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Developer Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.subject 
                        ? 'border-rose-500 bg-rose-500/10' 
                        : darkMode 
                        ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                    Message Content <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or job details here..."
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.message 
                        ? 'border-rose-500 bg-rose-500/10' 
                        : darkMode 
                        ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-extrabold text-sm uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending message...</span>
                    </div>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message Now</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
