import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';
import experienceData from '../../assets/data/experience.json';
import { Briefcase as BriefcaseIcon, Calendar as CalendarIcon } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-display font-bold mb-12"
        >
          Experience
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="glass rounded-xl p-8 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-xl" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <BriefcaseIcon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-accent font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/5 text-neutral-800 dark:text-neutral-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
