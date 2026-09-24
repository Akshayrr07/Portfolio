import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../animations/variants.jsx';

const NotFound = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center"
      aria-labelledby="not-found-title"
    >
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">404</p>
      <h1
        id="not-found-title"
        className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
      >
        Page not found
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-w-[140px] items-center justify-center rounded-xl border border-accent bg-accent px-6 py-3 font-bold text-neutral-950 shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
      >
        Back to home
      </Link>
    </motion.section>
  );
};

export default NotFound;
