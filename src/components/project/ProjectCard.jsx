import { motion } from 'framer-motion';
import { hoverCard } from '../../animations/variants.jsx';
import { Code as GithubIcon, ArrowUpRight, Cpu, Layers, Server, FolderGit2 } from 'lucide-react';

const getCategoryIcon = (category) => {
  switch (category?.toLowerCase()) {
    case 'ai/ml':
      return <Cpu className="w-4 h-4 text-accent" />;
    case 'full stack':
      return <Layers className="w-4 h-4 text-accent" />;
    case 'deployment':
      return <Server className="w-4 h-4 text-accent" />;
    default:
      return <FolderGit2 className="w-4 h-4 text-accent" />;
  }
};

const getStatusBadgeStyle = (status) => {
  switch (status?.toLowerCase()) {
    case 'live':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
    case 'featured':
      return 'bg-accent/15 text-accent border-accent/30';
    case 'completed':
      return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30';
    case 'in progress':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
    default:
      return 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-300 border-neutral-500/30';
  }
};

const ProjectCard = ({ project }) => {
  const extraTechCount = project.techStack ? (project.techStack.length > 3 ? project.techStack.length - 3 : 0) : 0;
  const hasGithub = Boolean(project.github && project.github !== '#');

  return (
    <motion.div
      variants={hoverCard}
      whileHover="hover"
      className="glass border border-neutral-200/80 dark:border-white/10 rounded-2xl overflow-hidden relative group h-full flex flex-col justify-between w-full shadow-sm hover:shadow-2xl hover:shadow-accent/15 hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.01]"
      style={{ padding: '28px 32px' }}
    >
      <div className="flex flex-col flex-1">
        {/* 1. Header / Image area */}
        <div className="relative h-[190px] sm:h-[210px] w-full overflow-hidden bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 dark:from-neutral-900/90 dark:via-neutral-800/80 dark:to-neutral-900 flex items-center justify-center rounded-xl border border-neutral-200/60 dark:border-white/5 group shrink-0">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-purple-500/15 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-md flex items-center justify-center shadow-inner mb-3 group-hover:scale-110 transition-transform duration-300 border border-neutral-200/40 dark:border-white/10">
                {getCategoryIcon(project.category)}
              </div>
              <span className="text-[11px] font-bold tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
                {project.category || 'Project'}
              </span>
            </div>
          )}

          {/* Category Badge overlay with explicit internal padding */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span 
              className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-200 backdrop-blur-md border border-neutral-200/80 dark:border-white/15 shadow-sm"
              style={{ paddingLeft: '14px', paddingRight: '14px', paddingTop: '6px', paddingBottom: '6px' }}
            >
              {getCategoryIcon(project.category)}
              {project.category}
            </span>
          </div>

          {/* Status Badge overlay with explicit internal padding */}
          {project.status && (
            <div className="absolute top-3.5 right-3.5 z-10">
              <span 
                className={`inline-flex items-center gap-1.5 rounded-full text-xs font-bold backdrop-blur-md border shadow-sm ${getStatusBadgeStyle(project.status)}`}
                style={{ paddingLeft: '14px', paddingRight: '14px', paddingTop: '6px', paddingBottom: '6px' }}
              >
                • {project.status}
              </span>
            </div>
          )}
        </div>

        {/* 2. Title */}
        <h3 
          className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-accent transition-colors line-clamp-1"
          style={{ marginTop: '20px', marginBottom: '12px' }}
        >
          {project.title}
        </h3>

        {/* 3. Description */}
        <p 
          className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-[2.5rem]"
          style={{ marginBottom: '20px' }}
        >
          {project.description}
        </p>

        {/* 4. Tech Stack Chips Container - Explicit 28px bottom margin */}
        <div 
          className="flex flex-wrap gap-2.5 min-h-[32px] items-center"
          style={{ marginBottom: '28px' }}
        >
          {project.techStack?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-neutral-100 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 font-semibold rounded-xl text-xs border border-neutral-200/80 dark:border-white/10 hover:bg-accent/10 hover:text-accent hover:border-accent/40 transition-all duration-200"
              style={{ paddingLeft: '14px', paddingRight: '14px', paddingTop: '6px', paddingBottom: '6px' }}
            >
              {tech}
            </span>
          ))}
          {extraTechCount > 0 && (
            <span 
              className="bg-accent/10 dark:bg-accent/20 text-accent font-semibold rounded-xl text-xs border border-accent/30"
              style={{ paddingLeft: '14px', paddingRight: '14px', paddingTop: '6px', paddingBottom: '6px' }}
            >
              +{extraTechCount} more
            </span>
          )}
        </div>
      </div>

      {/* 5. Action Buttons */}
      {hasGithub && (
        <div 
          className="flex items-center justify-between gap-3.5 w-full mt-auto"
          style={{ marginTop: '28px' }}
        >
          {/* Secondary GitHub button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 rounded-xl bg-white/80 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm border border-neutral-300/80 dark:border-white/15 hover:border-accent/60 dark:hover:border-accent/60 hover:bg-neutral-100 dark:hover:bg-white/15 hover:text-neutral-900 dark:hover:text-white backdrop-blur-md shadow-sm hover:shadow-md hover:shadow-accent/10 hover:-translate-y-[2px] inline-flex items-center justify-center gap-2 transition-all duration-300 group/git whitespace-nowrap"
            style={{ paddingLeft: '20px', paddingRight: '20px' }}
          >
            <GithubIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover/git:rotate-12 transition-transform duration-300 shrink-0" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover/git:translate-x-[2px] group-hover/git:-translate-y-[2px] transition-transform duration-300 shrink-0" />
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;

