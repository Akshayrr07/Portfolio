import { useTheme } from '../../hooks/useTheme.jsx';
import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl border border-neutral-200/50 dark:border-white/10 bg-neutral-100/50 dark:bg-white/5 hover:bg-neutral-200/50 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent outline-none"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 15, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -15, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <SunIcon className="w-5 h-5 text-amber-400" />
          ) : (
            <MoonIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
