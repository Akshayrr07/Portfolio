import Button from '../common/Button';
import { Code as GithubIcon, User as LinkedinIcon, Mail as MailIcon } from 'lucide-react';

const Hero = () => {
  const socialLinkClasses = 'p-3 rounded-full bg-neutral-100 dark:bg-white/5 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/15 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent';

  return (
    <section className="min-h-[calc(100vh-96px)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-200/30 dark:to-neutral-950/50 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h1 className="font-display font-bold text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider mb-4 text-neutral-900 dark:text-white">
          AKSHAY RR
        </h1>
        
        <p className="text-[clamp(0.9rem,2.2vw,1.4rem)] tracking-[0.5em] text-neutral-500 dark:text-neutral-400 mb-12">
          FULL STACK DEVELOPER
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Button variant="primary" href="/projects">
            View Projects
          </Button>
          <Button variant="outline" href="/contact">
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className={socialLinkClasses}
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="#"
            className={socialLinkClasses}
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className={socialLinkClasses}
            aria-label="Email"
          >
            <MailIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
