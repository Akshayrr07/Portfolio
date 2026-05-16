import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyle = {
    position: 'relative',
    minWidth: '170px',
    height: '52px',
    padding: '18px',
    borderRadius: '12px',
    cursor: 'pointer',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.7rem',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.3s',
    textDecoration: 'none',
    border: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: '#25D366',
      color: 'white',
      border: '2px solid #25D366',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#25D366',
      border: '2px solid #25D366',
    },
    glass: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      style={{ ...baseStyle, ...variants[variant] }}
      className={className}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      <span>{children}</span>
      <ArrowRightIcon 
        style={{ width: '18px', height: '18px' }} 
      />
    </Component>
  );
};

export default Button;
