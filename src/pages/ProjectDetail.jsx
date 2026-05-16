import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants.jsx';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft as ArrowLeftIcon, Code as GithubIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import Button from '../components/common/Button';
import projectsData from '../assets/data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInUp}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="container mx-auto px-4 py-24"
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      <motion.div variants={fadeInUp} className="mb-12">
        <div className="h-[400px] bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-8">
          <span className="text-2xl font-bold tracking-wider">PROJECT IMAGE</span>
        </div>
        
        <h1 className="text-5xl font-display font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-4">{project.category}</p>
        <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          View on GitHub
        </a>
        {project.liveDemo !== '#' && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            <ExternalLinkIcon className="w-5 h-5" />
            Live Demo
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
