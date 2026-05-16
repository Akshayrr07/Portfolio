import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants.jsx';
import ProjectsSection from '../components/sections/Projects';

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
    >
      <ProjectsSection />
    </motion.div>
  );
};

export default Projects;
