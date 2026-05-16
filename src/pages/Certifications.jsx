import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants.jsx';
import CertificationsSection from '../components/sections/Certifications';

const Certifications = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
    >
      <CertificationsSection />
    </motion.div>
  );
};

export default Certifications;
