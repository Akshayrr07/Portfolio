import { motion } from 'framer-motion';
import { Code as GithubIcon, User as LinkedinIcon, Mail as MailIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';

const SocialLink = ({ platform, href, label }) => {
  const icons = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    email: MailIcon,
    external: ExternalLinkIcon,
  };

  const Icon = icons[platform] || ExternalLinkIcon;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white/90 dark:bg-[#141414]/90 border border-neutral-200/80 dark:border-neutral-800/90 text-neutral-800 dark:text-neutral-200 hover:text-accent dark:hover:text-accent hover:border-accent/60 shadow-sm dark:shadow-md transition-all duration-300 font-semibold text-sm sm:text-base hover:shadow-[0_0_24px_rgba(37,211,102,0.28)]"
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <Icon className="w-5.5 h-5.5 text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
      </span>
    </motion.a>
  );
};

export default SocialLink;
