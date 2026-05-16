import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants.jsx';
import AboutSection from '../components/sections/About';

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
    >
      <AboutSection />
    </motion.div>
  );
};

export default About;
