import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';

const About = () => {
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
          About Me
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Passionate Full Stack Developer focused on building scalable,
              responsive, and production-ready applications. Skilled in frontend,
              backend, and AI-powered systems with strong attention to UI/UX and
              system performance.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I specialize in creating modern web experiences using React,
              Node.js, and cutting-edge AI/ML technologies. My goal is to build
              applications that not only look great but also perform exceptionally.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Highlights</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Responsive UI Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>React & Node.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>AI/ML Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>REST APIs & Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Performance Optimization</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
