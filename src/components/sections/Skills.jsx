import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants.jsx';
import skillsData from '../../assets/data/skills.json';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGit,
  SiGithub,
  SiDocker,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiScikitlearn
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skillIconMap = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  ReactJS: SiReact,
  TailwindCSS: SiTailwindcss,
  NodeJS: SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  AWS: FaAws,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  OpenCV: SiOpencv,
  'Machine Learning': SiScikitlearn,
};

const formatCategoryTitle = (key) => {
  if (key === 'ai_ml') return 'AI / ML';
  return key.replace('_', ' ');
};

const Skills = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background Lighting Spotlights - Soft & Blended Natural Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-accent/[0.06] dark:bg-accent/[0.08] rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Container - Generous Margins & Centered Layout */}
      <div className="max-w-[1240px] w-full mx-auto flex flex-col justify-start items-center px-4 sm:px-8 lg:px-12">
        {/* Section Heading Group */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2.5 sm:gap-3 w-full max-w-3xl mb-10 sm:mb-12"
        >
          <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-neutral-900 dark:text-white leading-tight">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl">
            My technical skills, frameworks, tools, and proficiencies.
          </p>
        </motion.div>
        
        {/* Skills Categories Group - 76px Vertical Gap Between Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-[76px] w-full"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={fadeInUp} className="w-full">
              {/* Category Heading with Perfectly Aligned Green Accent Indicator */}
              <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-black tracking-tight mb-6 capitalize text-neutral-900 dark:text-white flex items-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 inline-block" />
                <span>{formatCategoryTitle(category)}</span>
              </h3>

              {/* Skill Cards Responsive CSS Grid (Equal Dimension 56px Height Cards) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                {skills.map((skill, index) => {
                  const IconComp = skillIconMap[skill.name] || SiJavascript;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="glass bg-white/80 dark:bg-[#141414]/90 backdrop-blur-md rounded-2xl px-4 sm:px-5 h-[56px] min-h-[56px] w-full border border-neutral-200/60 dark:border-white/10 flex items-center justify-center gap-3 transition-all duration-250 ease-out hover:border-accent/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.22)] group cursor-pointer"
                    >
                      <IconComp className="w-5 h-5 text-accent/90 group-hover:text-accent group-hover:scale-110 transition-transform duration-250 shrink-0" />
                      <span className="font-bold text-neutral-800 dark:text-neutral-200 text-[14px] sm:text-[15px] group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-250 truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
