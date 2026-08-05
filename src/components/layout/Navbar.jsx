import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../common/ThemeToggle.jsx';

const SmallNavbarLogo = () => (
  <svg className="w-8 h-8 sm:w-[36px] sm:h-[36px] shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <nav 
      className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-[1480px] rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-xl shadow-lg transition-all duration-300 flex flex-col justify-center"
      style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '16px', paddingBottom: '16px' }}
    >
      <div className="w-full flex items-center justify-between">
        {/* 1. Branding (Left Section) */}
        <Link
          to="/"
          className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg shrink-0"
        >
          <SmallNavbarLogo />
          <div className="flex flex-col justify-center">
            <span className="text-[17px] sm:text-[19px] font-extrabold font-sans tracking-tight text-neutral-900 dark:text-white group-hover:text-accent transition-colors duration-200 leading-none">
              AKSHAY RR
            </span>
            <span className="hidden sm:block text-[9.5px] sm:text-[10px] font-bold tracking-[1.8px] text-accent uppercase leading-none mt-0.5">
              FULL-STACK ENGINEER
            </span>
          </div>
        </Link>

        {/* 2. Navigation (Centered Section for Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center items-center px-4">
          <div className="flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 text-[14px] font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-accent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. Theme Toggle (Right Section for Desktop) */}
        <div className="hidden lg:flex items-center justify-end shrink-0">
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button & Theme Toggle */}
        <div className="flex lg:hidden items-center gap-3 shrink-0">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XIcon className="w-4.5 h-4.5 text-neutral-800 dark:text-white" />
            ) : (
              <MenuIcon className="w-4.5 h-4.5 text-neutral-800 dark:text-white" />
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-neutral-200/50 dark:border-neutral-800 mt-2 pt-1.5"
          >
            <div className="py-1.5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors duration-200 ${isActive
                        ? 'text-accent bg-accent/10 dark:bg-accent/15 font-semibold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-accent hover:bg-neutral-100 dark:hover:bg-white/5'
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
    </nav>
  );
};

export default Navbar;
