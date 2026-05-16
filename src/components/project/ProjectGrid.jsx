import { motion } from 'framer-motion';
import { staggerContainer } from '../../animations/variants';
import ProjectCard from './ProjectCard';
import projectsData from '../../assets/data/projects.json';

const ProjectGrid = ({ category = null }) => {
  const filteredProjects = category
    ? projectsData.filter(p => p.category === category)
    : projectsData;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
    >
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
