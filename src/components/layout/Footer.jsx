const Footer = () => {
  return (
    <footer className="w-full mt-20 sm:mt-24 lg:mt-28 py-8 border-t border-neutral-200/60 dark:border-neutral-800/80 bg-transparent">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm font-bold text-neutral-900 dark:text-white">
          Designed & Developed by <span className="text-accent">Akshay RR</span>
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          Built with React, Vite & Framer Motion
        </p>
        <p className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-medium">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
