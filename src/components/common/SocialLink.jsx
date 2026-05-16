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
      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </motion.a>
  );
};

export default SocialLink;
