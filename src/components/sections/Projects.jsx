import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import ProjectGrid from '../project/ProjectGrid';

const Projects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 lg:px-12 pt-36 sm:pt-44 lg:pt-48 pb-24 sm:pb-32 relative overflow-hidden">
      {/* Enhanced Background Glow & Depth Spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-12 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-accent/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-40" />

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-start items-center px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-4 w-full max-w-3xl"
          style={{ marginBottom: '48px' }}
        >
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-neutral-900 dark:text-white leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-2xl">
            A collection of AI/ML, Full Stack, and Production-ready applications built using modern technologies.
          </p>
        </motion.div>
        
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Projects;
