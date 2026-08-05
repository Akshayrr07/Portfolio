import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  hoverCard
} from '../../animations/variants.jsx';

import data from '../../assets/data/certifications.json';

import {
  Award,
  BadgeCheck,
  Code2,
  Trophy,
  Medal,
  Flag
} from 'lucide-react';

const iconMap = {
  Award,
  BadgeCheck,
  Code2,
  Trophy,
  Medal,
  Flag
};

const AchievementsAndCertifications = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 lg:px-12 pt-36 sm:pt-44 lg:pt-48 pb-24 sm:pb-32 relative overflow-hidden">
      {/* Background Lighting Spotlights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Container */}
      <div className="max-w-[1280px] w-full mx-auto flex flex-col justify-start items-center px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-3 w-full max-w-3xl"
          style={{ marginBottom: '64px' }}
        >
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-neutral-900 dark:text-white leading-tight">
            Achievements & Certifications
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl">
            Certifications, technical accomplishments, and competitive achievements
            reflecting continuous learning, leadership, and problem-solving expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-8
            w-full
          "
          style={{ marginTop: '16px' }}
        >
          {data.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover="hover"
                className="glass rounded-2xl border border-neutral-200/80 dark:border-white/10 relative overflow-hidden transition-all duration-300 h-full flex flex-col justify-start items-center shadow-sm hover:shadow-xl hover:shadow-accent/15 hover:border-accent/40"
                style={{ padding: '32px 28px' }}
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    opacity-0
                    hover:opacity-100
                    transition-opacity
                    duration-300
                    bg-gradient-to-br
                    from-accent/10
                    to-transparent
                    pointer-events-none
                  "
                />

                <motion.div
                  variants={hoverCard}
                  className="relative z-10 flex flex-col items-center justify-start text-center gap-3.5 w-full flex-1"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-neutral-200/80 dark:border-white/10 bg-white/80 dark:bg-[#111111]/90 shadow-sm transition-all duration-300 shrink-0 mb-1">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mt-1">
                    {item.description}
                  </p>

                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsAndCertifications;