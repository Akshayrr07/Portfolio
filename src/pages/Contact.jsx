import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants.jsx';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
      className="w-full flex-1 flex flex-col justify-center items-center"
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
