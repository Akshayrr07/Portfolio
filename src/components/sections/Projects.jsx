import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import ProjectGrid from '../project/ProjectGrid';

const Projects = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-sans font-extrabold tracking-tight mb-12"
        >
          Projects
        </motion.h2>
        
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Projects;
