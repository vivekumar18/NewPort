import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaXmark, FaLock, FaTrash, FaRotateRight, FaEnvelope, 
  FaUser, FaCalendarDays, FaShieldHalved, FaCircleCheck, FaTriangleExclamation 
} from 'react-icons/fa6';
import { fetchAdminContactMessages, deleteContactMessage } from '../services/contactService';
import { isSupabaseConfigured } from '../lib/supabase';

export default function AdminModal({ isOpen, onClose, darkMode }) {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  // Default admin PIN for local dashboard access
  const DEFAULT_PIN = 'vika2410';

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === DEFAULT_PIN || passcode === 'vika2410') {
      setIsAuthenticated(true);
      setAuthError('');
      loadMessages();
    } else {
      setAuthError('Invalid Admin Passcode. Please try again.');
    }
  };

  const loadMessages = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const data = await fetchAdminContactMessages();
      setMessages(data);
    } catch (err) {
      console.error('Error loading admin messages:', err);
      setErrorMsg(err.message || 'Failed to fetch messages from Supabase.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadMessages();
    }
  }, [isOpen, isAuthenticated]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    setDeletingId(id);
    try {
      await deleteContactMessage(id);
      setMessages(messages.filter(m => m.id !== id));
    } catch (err) {
      alert('Failed to delete message: ' + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
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
          className={`relative w-full max-w-4xl rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] flex flex-col border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-lg font-bold border border-blue-500/20">
                <FaShieldHalved />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">Admin Messages Dashboard</h3>
                <p className="text-xs text-blue-500 font-semibold">Supabase Contact Submissions</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <button
                  onClick={loadMessages}
                  disabled={loading}
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title="Refresh Messages"
                >
                  <FaRotateRight className={`text-base ${loading ? 'animate-spin' : ''}`} />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <FaXmark className="text-xl" />
              </button>
            </div>
          </div>

          {!isAuthenticated ? (
            /* Passcode Protection Form */
            <div className="py-12 px-4 max-w-md mx-auto w-full text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-2xl mx-auto mb-4 border border-blue-500/20">
                <FaLock />
              </div>

              <h4 className="text-xl font-bold mb-2">Admin Passcode Required</h4>
              <p className="text-xs text-slate-400 mb-6">
                Enter your admin security passcode to view contact messages stored in Supabase.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter admin passcode"
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium border text-center transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                  {authError && <p className="text-xs text-rose-500 mt-2 font-semibold">{authError}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition"
                >
                  Unlock Admin Dashboard
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Messages Table / Grid */
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              
              {/* Configuration Alert Banner */}
              {!isSupabaseConfigured && (
                <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-3">
                  <FaTriangleExclamation className="text-lg shrink-0" />
                  <div>
                    <strong className="block text-white">Supabase Credentials Not Yet Configured in .env</strong>
                    <span>Add your actual VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env to connect your database live.</span>
                  </div>
                </div>
              )}

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pb-2 border-b border-slate-800">
                <span>Total Messages Stored: <strong className="text-white">{messages.length}</strong></span>
                <span>Sorted by Newest First</span>
              </div>

              {loading ? (
                <div className="py-16 text-center text-slate-400 text-sm">
                  <FaRotateRight className="animate-spin text-2xl mx-auto mb-2 text-blue-500" />
                  <span>Loading messages from Supabase...</span>
                </div>
              ) : messages.length === 0 ? (
                <div className="py-16 text-center text-slate-400 space-y-2">
                  <FaEnvelope className="text-4xl text-slate-600 mx-auto" />
                  <p className="font-bold text-slate-300">No Messages Found</p>
                  <p className="text-xs">When visitors submit the contact form, their entries will appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 font-bold text-xs flex items-center justify-center">
                            {msg.name ? msg.name.charAt(0).toUpperCase() : 'U'}
                          </span>
                          <div>
                            <h5 className="font-extrabold text-sm text-white">{msg.name}</h5>
                            <a href={`mailto:${msg.email}`} className="text-xs text-blue-400 hover:underline">
                              {msg.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <FaCalendarDays className="text-blue-500" />
                            {msg.created_at ? new Date(msg.created_at).toLocaleString() : 'Just now'}
                          </span>
                          <button
                            onClick={() => handleDelete(msg.id)}
                            disabled={deletingId === msg.id}
                            className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition border border-rose-500/20"
                            title="Delete Message"
                          >
                            <FaTrash className="text-xs" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                          Subject: {msg.subject}
                        </span>
                        <p className="text-xs leading-relaxed whitespace-pre-wrap text-slate-300">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* Footer Action */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Supabase RLS Protected</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
            >
              Close Dashboard
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
