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
      <section id="home" aria-label="Home" className="home-section">
        <Hero />
      </section>
      <section id="about" aria-label="About" className="home-section">
        <AboutSection />
      </section>
      <section id="skills" aria-label="Skills" className="home-section">
        <SkillsSection />
      </section>
      <section id="experience" aria-label="Experience" className="home-section">
        <ExperienceSection />
      </section>
      <section id="projects" aria-label="Projects" className="home-section">
        <ProjectsSection />
      </section>
      <section id="certifications" aria-label="Certifications" className="home-section">
        <CertificationsSection />
      </section>
      <section id="contact" aria-label="Contact" className="home-section">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
