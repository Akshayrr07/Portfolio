import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';
import skillsData from '../../assets/data/skills.json';

const Skills = () => {
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
          Skills
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 capitalize">
                {category.replace('_', ' ')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="glass rounded-xl p-6 text-center transition-all"
                  >
                    <h4 className="font-semibold">{skill.name}</h4>
                    <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
