import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants.jsx';
import CertificationsSection from '../components/sections/Certifications';

const Certifications = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full flex-1 flex flex-col justify-start items-center"
    >
      <CertificationsSection />
    </motion.div>
  );
};

export default Certifications;