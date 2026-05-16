import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants.jsx';
import SkillsSection from '../components/sections/Skills';

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
    >
      <SkillsSection />
    </motion.div>
  );
};

export default Skills;
