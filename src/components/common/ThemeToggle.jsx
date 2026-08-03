import { useTheme } from '../../hooks/useTheme.jsx';
import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700/80 bg-white/80 dark:bg-[#141414] hover:border-accent/60 dark:hover:border-accent/60 transition-all duration-250 transform hover:scale-105 cursor-pointer overflow-hidden flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent outline-none shadow-sm p-2.5"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 12, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -12, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <SunIcon className="w-5 h-5 text-accent drop-shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
          ) : (
            <MoonIcon className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
