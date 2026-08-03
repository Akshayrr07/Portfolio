import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import ProjectGrid from '../project/ProjectGrid';

const Projects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 relative overflow-hidden">
      {/* Background Lighting Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-start items-center px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-3 w-full max-w-3xl mb-14 sm:mb-16"
        >
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-neutral-900 dark:text-white leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl">
            A showcase of web applications, tools, and technical projects I've built.
          </p>
        </motion.div>
        
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Projects;
