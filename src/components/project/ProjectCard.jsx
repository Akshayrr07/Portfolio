import { motion } from 'framer-motion';
import { hoverCard } from '../../animations/variants.jsx';
import { Code as GithubIcon, Maximize2 as Maximize2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={hoverCard}
      whileHover="hover"
      className="glass rounded-2xl overflow-hidden relative group min-h-[420px] max-w-[320px]"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Link
          to={`/projects/${project.id}`}
          className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <Maximize2Icon className="w-5 h-5 text-white" />
        </Link>
      </div>
      
      <div className="h-[180px] bg-gradient-to-br from-accent/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center mt-4 mx-4 rounded-xl">
        <span className="text-xl font-bold tracking-wider">PROJECT IMAGE</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center gap-2 font-semibold"
        >
          <GithubIcon className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
