import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../common/ThemeToggle.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1200px] rounded-2xl border border-neutral-200/50 dark:border-white/10 bg-white/80 dark:bg-neutral-950/40 backdrop-blur-md shadow-lg shadow-neutral-200/20 dark:shadow-none transition-all duration-300">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold font-display tracking-wider text-neutral-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-2"
          >
            AKSHAY RR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-neutral-100/50 dark:bg-white/5 p-1 rounded-xl border border-neutral-200/20 dark:border-white/5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-accent'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-none rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-transparent border border-neutral-200/50 dark:border-white/10 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon className="w-5 h-5 text-neutral-800 dark:text-white" />
              ) : (
                <MenuIcon className="w-5 h-5 text-neutral-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-neutral-200/50 dark:border-white/5 mt-3"
            >
              <div className="py-4 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 text-base font-semibold rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'text-accent bg-accent/10 dark:bg-accent/15'
                          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

