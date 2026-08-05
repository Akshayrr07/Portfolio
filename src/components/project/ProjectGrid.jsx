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
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch w-full"
    >
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <div className="col-span-full py-16 text-center text-neutral-500 dark:text-neutral-400">
          No projects found in this category.
        </div>
      )}
    </motion.div>
  );
};

export default ProjectGrid;
