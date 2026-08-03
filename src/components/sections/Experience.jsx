import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';
import experienceData from '../../assets/data/experience.json';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-20 sm:py-28 relative overflow-hidden">
      {/* Background Lighting Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Container */}
      <div className="max-w-[1100px] w-full mx-auto flex flex-col justify-center items-center my-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-3 w-full max-w-3xl"
          style={{ marginBottom: '64px' }}
        >
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-neutral-900 dark:text-white leading-tight">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl">
            My professional journey, engineering internships, and key accomplishments.
          </p>
        </motion.div>

        {/* Timeline Container - Explicit 80px total gap from description */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl sm:max-w-5xl w-full mx-auto flex flex-col gap-8 sm:gap-10 pl-8 sm:pl-14 lg:pl-16"
          style={{ marginTop: '16px' }}
        >
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-[9px] sm:left-[21px] lg:left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-accent/10 rounded-full" />

          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="relative group"
            >
              {/* Experience Card - Perfectly Balanced Height (28px top/bottom, 36px left/right) */}
              <div 
                className="w-full bg-white/90 dark:bg-[#121212]/95 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,211,102,0.15)] hover:border-accent/50 flex flex-col"
                style={{ padding: '28px 36px' }}
              >
                
                {/* Inset Content Wrapper */}
                <div className="w-full flex flex-col">

                  {/* Header Section: Title Row + Company Info Row */}
                  <div 
                    className="flex flex-col gap-3 border-b border-neutral-200/60 dark:border-white/10"
                    style={{ paddingBottom: '18px', marginBottom: '24px' }}
                  >
                    {/* Top Row: Job Title (left) & Type (right text) */}
                    <div className="flex flex-wrap items-center justify-between gap-3 w-full">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                        {exp.title}
                      </h3>
                      <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider shrink-0">
                        {exp.type}
                      </span>
                    </div>

                    {/* Second Row: Company, Location, Date Range */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-accent font-semibold">
                        <Building2 className="w-4.5 h-4.5 text-accent shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-medium">
                        <MapPin className="w-4.5 h-4.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-medium">
                        <Calendar className="w-4.5 h-4.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                        <span>{exp.dateRange}</span>
                      </div>
                    </div>
                  </div>

                  {/* Third Section: Balanced Bullet Points */}
                  <ul className="space-y-3.5 sm:space-y-4" style={{ marginTop: '2px', marginBottom: '4px' }}>
                    {exp.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-3.5 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                        <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Section: Technologies as Clean Text */}
                  <div 
                    className="w-full border-t border-neutral-200/60 dark:border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium"
                    style={{ marginTop: '24px', paddingTop: '20px' }}
                  >
                    <span className="text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-wider text-xs mr-0.5">
                      Technologies:
                    </span>
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-neutral-700 dark:text-neutral-300 font-semibold hover:text-accent transition-colors"
                      >
                        {tech}{index < exp.technologies.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
