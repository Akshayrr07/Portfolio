import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/About';
import SkillsSection from '../components/sections/Skills';
import ExperienceSection from '../components/sections/Experience';
import ProjectsSection from '../components/sections/Projects';
import CertificationsSection from '../components/sections/Certifications';
import ContactSection from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="certifications">
        <CertificationsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
