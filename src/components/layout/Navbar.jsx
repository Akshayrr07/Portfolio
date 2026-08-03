import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../common/ThemeToggle.jsx';

const SmallNavbarLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="stroke-neutral-900 dark:stroke-white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 28 90 V 30 H 48 C 58 30 66 36 66 45 C 66 54 58 60 48 60 H 28" />
      <path d="M 46 60 L 66 90" />
    </g>
    <g stroke="#25D366" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 68 90 V 30 H 88 C 98 30 106 36 106 45 C 106 54 98 60 88 60 H 68" />
      <path d="M 86 60 L 106 90" />
    </g>
  </svg>
);

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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1240px] rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-xl shadow-xl transition-all duration-300">
      <div className="px-6 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Left Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <SmallNavbarLogo />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-sans tracking-tight text-neutral-900 dark:text-white group-hover:text-accent transition-colors leading-tight">
                AKSHAY RR
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-accent uppercase">
                FULL STACK DEVELOPER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 sm:gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-accent font-semibold'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
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
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
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
              className="lg:hidden overflow-hidden border-t border-neutral-200/50 dark:border-neutral-800 mt-3 pt-2"
            >
              <div className="py-2 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
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

