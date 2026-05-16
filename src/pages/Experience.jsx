import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants.jsx';
import ExperienceSection from '../components/sections/Experience';

const Experience = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
    >
      <ExperienceSection />
    </motion.div>
  );
};

export default Experience;
