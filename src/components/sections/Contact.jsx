import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, Clock, Copy, Check, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';
import Button from '../common/Button';
import socialData from '../../assets/data/social.json';

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = socialData.email && socialData.email !== '#' ? socialData.email.replace('mailto:', '') : 'contact@akshayrr.dev';
  const linkedinUrl = socialData.linkedin && socialData.linkedin !== '#' ? socialData.linkedin : 'https://linkedin.com';
  const githubUrl = socialData.github && socialData.github !== '#' ? socialData.github : 'https://github.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-12 lg:pb-20 relative overflow-hidden">
      {/* Background Lighting Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Centered Container */}
      <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center flex-1 my-auto px-2 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center w-full my-auto py-6 sm:py-10"
        >
          {/* 1. Focal Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 dark:bg-accent/15 border border-accent/20 text-accent text-[12px] sm:text-[13px] font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Get In Touch</span>
          </motion.div>

          {/* 2. Main Title */}
          <motion.h2 variants={fadeInUp} className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] tracking-tight text-neutral-900 dark:text-white leading-[1.05] mb-6 max-w-4xl">
            Let's Build Something <span className="text-accent">Amazing</span> Together
          </motion.h2>

          {/* 3. Subtitle / Lead Paragraph */}
          <motion.p variants={fadeInUp} className="text-base sm:text-lg lg:text-[18px] text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-[1.85] mb-10 sm:mb-12">
            Available for full-time roles, freelance projects, and collaborations. Feel free to reach out directly via email or drop a message below!
          </motion.p>

          {/* 4. Main Glass Contact Container */}
          <motion.div variants={fadeInUp} className="w-full max-w-5xl rounded-3xl bg-white/90 dark:bg-[#141414]/90 border border-neutral-200/80 dark:border-neutral-800/90 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-[0_0_40px_rgba(37,211,102,0.12)] text-left">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Direct Contact Info & Quick Actions */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8 h-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
                    Contact Information
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 sm:mb-8">
                    Prefer direct communication? You can copy my email or connect on social platforms below.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="flex flex-col gap-4">
                  {/* Email Box with Copy Action */}
                  <div className="p-4 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 flex items-center justify-between gap-3 group hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">Email</span>
                        <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white truncate block">{emailAddress}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-accent hover:border-accent transition-all shrink-0 cursor-pointer"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location Card */}
                  <div className="p-4 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">Location</span>
                      <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white block">India • Available Worldwide</span>
                    </div>
                  </div>

                  {/* Availability Card */}
                  <div className="p-4 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">Response Time</span>
                      <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white block">Within 24 Hours</span>
                    </div>
                  </div>
                </div>

                {/* Social Quick Links */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-3">Connect Online</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white hover:border-accent hover:text-accent transition-all text-sm font-semibold"
                    >
                      <GithubIcon />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-60" />
                    </a>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white hover:border-accent hover:text-accent transition-all text-sm font-semibold"
                    >
                      <LinkedinIcon />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Send Message Form */}
              <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-neutral-800 pt-8 lg:pt-0 lg:pl-10">
                <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  Send a Message
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                  Fill out the details below and I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-accent transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Akshay, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="flex items-center gap-2 text-sm font-semibold text-accent"
                        >
                          <Check className="w-4 h-4" />
                          <span>Message Sent!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

