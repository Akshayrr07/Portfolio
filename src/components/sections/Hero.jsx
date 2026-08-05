import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Mail, Code2, Briefcase, GraduationCap, Star } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

// Precise Stylized RR Emblem Logo
const RREmblemLogo = () => (
  <svg
    className="w-20 h-20 sm:w-28 sm:h-28 drop-shadow-[0_0_18px_rgba(37,211,102,0.6)]"
    viewBox="0 0 140 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* First R - Theme Adaptive */}
    <g className="stroke-neutral-900 dark:stroke-white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 28 90 V 30 H 48 C 58 30 66 36 66 45 C 66 54 58 60 48 60 H 28" />
      <path d="M 46 60 L 66 90" />
    </g>

    {/* Second R - Accent Green (#25D366) */}
    <g stroke="#25D366" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 68 90 V 30 H 88 C 98 30 106 36 106 45 C 106 54 98 60 88 60 H 68" />
      <path d="M 86 60 L 106 90" />
    </g>
  </svg>
);

const Hero = () => {
  const socialSquareClasses =
    'w-10 h-10 rounded-xl bg-white/80 dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-white hover:border-accent/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm dark:shadow-md hover:shadow-[0_0_14px_rgba(37,211,102,0.35)] p-2.5';

  const stats = [
    {
      icon: Code2,
      value: '2+',
      label: 'Years Learning',
    },
    {
      icon: Briefcase,
      value: '10+',
      label: 'Projects Completed',
    },
    {
      icon: GraduationCap,
      value: '5+',
      label: 'Certifications',
    },
    {
      icon: Star,
      value: 'Passionate',
      label: 'Problem Solver',
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 lg:pb-24 relative overflow-hidden">
      {/* Background Lighting Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Container */}
      <div className="max-w-[1480px] w-full mx-auto flex flex-col justify-center items-center flex-1 my-auto">
        {/* 50/50 Balanced 2-Column Responsive Layout */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center justify-between w-full my-auto py-6 sm:py-10">
          {/* Left Column: Typography & Spacious Flex Gap Scale */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8 lg:gap-9"
          >
            {/* 1. Minimal Focal Badge */}
            <div 
              className="inline-flex items-center gap-2.5 rounded-full bg-accent/10 dark:bg-accent/15 border border-accent/25 text-accent text-[12px] sm:text-[13px] font-semibold tracking-wide"
              style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px' }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for new opportunities</span>
            </div>

            {/* 2. Name Heading */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
              AKSHAY <span className="text-accent">RR</span>
            </h1>

            {/* 3. Subtitle */}
            <p className="text-[13px] sm:text-[14px] font-bold tracking-[3.5px] text-accent uppercase">
              Full-Stack Engineer
            </p>

            {/* 4. Description */}
            <p className="text-base sm:text-[17px] text-neutral-600 dark:text-[#b5b5b5] max-w-[540px] leading-[1.85]">
              I build fast, scalable web applications using React, Node.js, and modern cloud technologies—transforming ideas into polished digital experiences.
            </p>

            {/* 5. CTA Buttons */}
            <div className="flex flex-wrap sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <Button variant="primary" to="/projects" className="w-full sm:w-auto">
                View Projects
              </Button>
              <Button variant="outline" to="/contact" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </div>

            {/* 6. Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={socialSquareClasses}
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={socialSquareClasses}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:contact@akshayrr.dev"
                className={socialSquareClasses}
                aria-label="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Balanced Orbital Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex items-center justify-center relative py-2"
          >
            <div className="relative w-56 h-56 sm:w-68 sm:h-68 lg:w-[300px] lg:h-[300px] xl:w-[330px] xl:h-[330px] flex items-center justify-center">
              {/* Outer Orbiting Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-accent/25 border-dashed"
              />

              {/* Orbiting Dot 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent absolute top-2 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#25D366]" />
              </motion.div>

              {/* Orbiting Dot 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-accent/15"
              >
                <div className="w-2 h-2 rounded-full bg-accent absolute bottom-4 right-10 shadow-[0_0_8px_#25D366]" />
              </motion.div>

              {/* Inner Badge Container with Soft Glow */}
              <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-[240px] lg:h-[240px] xl:w-[260px] xl:h-[260px] rounded-full bg-white/90 dark:bg-[#111111]/90 border border-neutral-200 dark:border-accent/40 flex items-center justify-center shadow-xl dark:shadow-[0_0_35px_rgba(37,211,102,0.18)] backdrop-blur-xl relative">
                <div className="absolute inset-0 rounded-full bg-accent/10 blur-md pointer-events-none" />
                <RREmblemLogo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Floating Stats Cards (4 Separate Individual Boxes) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        className="w-full max-w-[1480px] mx-auto px-0 relative lg:absolute lg:bottom-8 xl:bottom-10 lg:left-1/2 lg:-translate-x-1/2 z-10 mt-10 lg:mt-0"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/90 dark:bg-[#141414]/90 border border-neutral-200/80 dark:border-neutral-800/90 backdrop-blur-md flex items-center gap-4 sm:gap-5 shadow-md dark:shadow-lg hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1"
                style={{ padding: '24px 28px' }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-100 dark:bg-[#112217] border border-neutral-200 dark:border-emerald-900/40 flex items-center justify-center text-accent shrink-0 shadow-sm p-2.5">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-neutral-900 dark:text-white tracking-tight truncate">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5 truncate">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
