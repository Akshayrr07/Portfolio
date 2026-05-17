import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  hoverCard
} from '../../animations/variants.jsx';

import data from '../../assets/data/certifications.json';

import {
  Award,
  BadgeCheck,
  Code2,
  Trophy,
  Medal,
  Flag
} from 'lucide-react';

const iconMap = {
  Award,
  BadgeCheck,
  Code2,
  Trophy,
  Medal,
  Flag
};

const AchievementsAndCertifications = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Achievements & Certifications
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-loose text-sm md:text-base mb-8">
            Certifications, technical accomplishments, and competitive achievements
            reflecting continuous learning, leadership, and problem-solving expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {data.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover="hover"
                className="
                  glass
                  rounded-2xl
                  p-6
                  border
                  border-white/10
                  relative
                  overflow-hidden
                  transition-all
                  duration-300
                  h-full
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    hover:opacity-100
                    transition-opacity
                    duration-300
                    bg-gradient-to-br
                    from-accent/10
                    to-transparent
                    pointer-events-none
                  "
                />

                <motion.div
                  variants={hoverCard}
                  className="relative z-10"
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      mb-4
                      ${
                        item.type === 'achievement'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-accent/10 text-accent'
                      }
                    `}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold leading-snug p-8 m-10">
                    {item.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-gray-400 p-8 m-10">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed p-8">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsAndCertifications;