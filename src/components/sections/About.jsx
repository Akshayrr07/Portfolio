import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Zap, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';

const About = () => {
  const highlights = [
    { icon: Code2, label: 'Responsive UI Design' },
    { icon: Cpu, label: 'React & Node.js' },
    { icon: Layers, label: 'AI/ML Integration' },
    { icon: Zap, label: 'REST APIs & Deployment' },
    { icon: Rocket, label: 'Performance Optimization' },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-12 lg:pb-20 relative overflow-hidden">
      {/* Background Lighting Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Container - Centered Vertically & Horizontally */}
      <div className="max-w-[1480px] w-full mx-auto flex flex-col justify-center items-center flex-1 my-auto px-4 sm:px-6">
        {/* 2-Column Responsive Layout matching Hero section structure */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start justify-between w-full my-auto py-6 sm:py-10"
        >
          {/* Left Column: Typography */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8 w-full"
          >
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
              About Me
            </h2>

            <div className="space-y-6 sm:space-y-7 w-full max-w-2xl">
              <p className="text-base sm:text-lg lg:text-[18px] text-neutral-700 dark:text-neutral-300 leading-[1.85]">
                Passionate Full Stack Developer focused on building scalable,
                responsive, and production-ready applications. Skilled in frontend,
                backend, and AI-powered systems with strong attention to UI/UX and
                system performance.
              </p>
              <p className="text-base sm:text-lg lg:text-[18px] text-neutral-700 dark:text-neutral-300 leading-[1.85]">
                I specialize in creating modern web experiences using React,
                Node.js, and cutting-edge AI/ML technologies. My goal is to build
                applications that not only look great but also perform exceptionally.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Separated Quick Highlights Boxes */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col justify-start items-center lg:items-start w-full"
          >
            <div className="w-full max-w-[540px] mx-auto lg:mx-0 flex flex-col gap-7 sm:gap-9 lg:gap-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-center lg:text-left shrink-0">
                Quick Highlights
              </h3>

              {/* Separated Individual Glass Box Cards */}
              <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 w-full">
                {highlights.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="rounded-2xl bg-white/90 dark:bg-[#141414]/90 border border-neutral-200/80 dark:border-neutral-800/90 backdrop-blur-md p-4.5 sm:p-5.5 flex items-center gap-4 sm:gap-5 shadow-md dark:shadow-lg hover:border-accent/50 hover:shadow-[0_0_20px_rgba(37,211,102,0.18)] transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 shadow-sm group-hover:bg-accent group-hover:text-black transition-colors duration-200">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-accent transition-colors duration-200">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

