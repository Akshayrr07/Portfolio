import { motion } from 'framer-motion';
import { hoverCard } from '../../animations/variants.jsx';
import { Code as GithubIcon, Maximize2 as Maximize2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={hoverCard}
      whileHover="hover"
      className="glass border border-neutral-200/60 dark:border-white/10 rounded-2xl overflow-hidden relative group min-h-[420px] w-full md:max-w-none max-w-sm mx-auto"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Link
          to={`/projects/${project.id}`}
          className="w-10 h-10 rounded-lg bg-neutral-100/80 dark:bg-white/20 hover:bg-neutral-200 dark:hover:bg-white/30 flex items-center justify-center text-neutral-800 dark:text-white transition-colors shadow-sm dark:shadow-none"
        >
          <Maximize2Icon className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="h-[180px] bg-gradient-to-br from-accent/10 to-purple-500/10 dark:from-accent/20 dark:to-purple-500/20 backdrop-blur-sm flex items-center justify-center mt-4 mx-4 rounded-xl">
        <span className="text-xl font-bold tracking-wider text-neutral-800 dark:text-neutral-200">PROJECT IMAGE</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent font-semibold rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white transition-colors flex items-center justify-center gap-2 font-semibold outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <GithubIcon className="w-5 h-5 text-neutral-700 dark:text-white" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
