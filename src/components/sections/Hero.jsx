import Button from '../common/Button';
import { Code as GithubIcon, User as LinkedinIcon, Mail as MailIcon } from 'lucide-react';

const Hero = () => {
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, transparent, transparent, rgba(11, 11, 11, 0.5))',
    pointerEvents: 'none',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  };

  const h1Style = {
    fontFamily: 'League Gothic, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(4rem, 12vw, 9rem)',
    lineHeight: 1,
    letterSpacing: '0.1em',
    marginBottom: '16px',
  };

  const pStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    letterSpacing: '0.5em',
    color: '#9ca3af',
    marginBottom: '48px',
  };

  const buttonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '48px',
  };

  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
  };

  const socialLinkStyle = {
    padding: '12px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'background 0.3s',
  };

  return (
    <section style={sectionStyle}>
      <div style={backgroundStyle} />
      
      <div style={containerStyle}>
        <h1 style={h1Style}>
          AKSHAY RR
        </h1>
        
        <p style={pStyle}>
          FULL STACK DEVELOPER
        </p>
        
        <div style={buttonsStyle}>
          <Button variant="primary" href="/projects">
            View Projects
          </Button>
          <Button variant="outline" href="/contact">
            Contact Me
          </Button>
        </div>
        
        <div style={socialStyle}>
          <a
            href="#"
            style={socialLinkStyle}
            aria-label="GitHub"
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
          >
            <GithubIcon style={{ width: '24px', height: '24px' }} />
          </a>
          <a
            href="#"
            style={socialLinkStyle}
            aria-label="LinkedIn"
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
          >
            <LinkedinIcon style={{ width: '24px', height: '24px' }} />
          </a>
          <a
            href="mailto:your.email@example.com"
            style={socialLinkStyle}
            aria-label="Email"
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
          >
            <MailIcon style={{ width: '24px', height: '24px' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
