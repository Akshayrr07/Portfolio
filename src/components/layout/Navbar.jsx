import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px',
  };

  const linkStyle = {
    fontSize: '14px',
    fontWeight: '500',
    transition: 'color 0.3s',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'League Gothic, sans-serif' }}>
            AKSHAY RR
          </Link>

          <div style={{ display: window.innerWidth >= 768 ? 'flex' : 'none', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...linkStyle,
                  color: location.pathname === link.path ? '#25D366' : '#9ca3af',
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === link.path ? '#25D366' : '#9ca3af'}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div style={{ display: window.innerWidth < 768 ? 'flex' : 'none', alignItems: 'center', gap: '16px' }}>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: '8px',
                borderRadius: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              {isOpen ? <XIcon style={{ width: '24px', height: '24px' }} /> : <MenuIcon style={{ width: '24px', height: '24px' }} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div style={{ display: window.innerWidth < 768 ? 'block' : 'none', overflow: 'hidden' }}>
            <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    ...linkStyle,
                    color: location.pathname === link.path ? '#25D366' : '#9ca3af',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
