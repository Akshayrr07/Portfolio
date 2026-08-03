import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants.jsx';
import Button from '../common/Button';
import SocialLink from '../common/SocialLink';
import socialData from '../../assets/data/social.json';

const Contact = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center glass border border-neutral-200/60 dark:border-white/10 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4 text-neutral-900 dark:text-white">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Available for internships, freelance work, and full-time opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Button variant="primary" href={socialData.email}>
              Email Me
            </Button>
            <Button variant="outline" href={socialData.linkedin}>
              LinkedIn
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
            <SocialLink platform="github" href={socialData.github} label="GitHub" />
            <SocialLink platform="linkedin" href={socialData.linkedin} label="LinkedIn" />
            <SocialLink platform="email" href={socialData.email} label="Email" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
