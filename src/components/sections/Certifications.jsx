import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';
import certificationsData from '../../assets/data/certifications.json';
import { Award as AwardIcon } from 'lucide-react';

const Certifications = () => {
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
          Certifications
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-xl p-6 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <AwardIcon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
