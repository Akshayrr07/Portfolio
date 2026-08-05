import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants.jsx';
import Button from '../common/Button';
import SocialLink from '../common/SocialLink';
import socialData from '../../assets/data/social.json';
import { Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-50" />

      {/* Main Container - Centered Vertically & Horizontally */}
      <div className="max-w-[1480px] w-full mx-auto flex flex-col justify-center items-center flex-1 my-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[1020px] w-full mx-auto text-center bg-white/90 dark:bg-[#121212]/95 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 rounded-[32px] px-6 sm:px-14 lg:px-18 py-16 sm:py-24 lg:py-28 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col items-center gap-10 sm:gap-14 relative overflow-hidden"
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          {/* 1. Header Group: Title + Subtitle (with Top Margin) */}
          <div className="flex flex-col items-center gap-5 sm:gap-6 w-full max-w-3xl px-2 sm:px-6 pt-4 sm:pt-6">
            {/* Title */}
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              Let's Build Something Amazing
            </h2>
            
            {/* Subtitle Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-2xl">
              I'm always excited to collaborate on innovative web applications, AI projects, or full-time engineering roles. Let's start a conversation!
            </p>
          </div>
          
          {/* 2. CTA Action Group */}
          <div className="flex flex-col items-center gap-4 w-full pt-2">
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 w-full">
              <Button variant="primary" href={socialData.email}>
                Email Me
              </Button>
              <Button variant="outline" href={socialData.linkedin}>
                LinkedIn
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 pt-2">
              <Zap className="w-4 h-4 text-accent fill-accent/20 animate-pulse" />
              <span>Usually replies within 24 hours</span>
            </div>
          </div>
          
          {/* 3. Social Links Row (with Increased Internal Padding) */}
          <div className="w-full pt-10 sm:pt-12 pb-6 sm:pb-8 border-t border-neutral-200/50 dark:border-neutral-800/60 flex flex-col items-center gap-6 sm:gap-7">
            <p className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              Or connect via social platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-7">
              <SocialLink platform="github" href={socialData.github} label="GitHub" />
              <SocialLink platform="linkedin" href={socialData.linkedin} label="LinkedIn" />
              <SocialLink platform="email" href={socialData.email} label="Email" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
