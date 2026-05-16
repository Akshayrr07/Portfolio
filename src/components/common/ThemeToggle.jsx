import { useTheme } from '../../hooks/useTheme.jsx';
import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const buttonStyle = {
    position: 'relative',
    width: '60px',
    height: '34px',
    borderRadius: '17px',
    backgroundColor: '#1a1a1a',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.4s',
    outline: 'none',
    cursor: 'pointer',
  };

  const iconContainerStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sunIconStyle = {
    width: '16px',
    height: '16px',
    color: '#fbbf24',
    transition: 'opacity 0.4s',
    opacity: isDark ? 0 : 1,
  };

  const moonIconStyle = {
    width: '16px',
    height: '16px',
    color: '#60a5fa',
    transition: 'opacity 0.4s',
    opacity: isDark ? 1 : 0,
  };

  const toggleStyle = {
    position: 'absolute',
    top: '4px',
    left: '4px',
    width: '26px',
    height: '26px',
    borderRadius: '13px',
    backgroundColor: 'white',
    transition: 'transform 0.4s',
    transform: isDark ? 'translateX(26px)' : 'translateX(0)',
  };

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      aria-label="Toggle theme"
    >
      <div style={iconContainerStyle}>
        <SunIcon style={sunIconStyle} />
        <MoonIcon style={moonIconStyle} />
      </div>
      <div style={toggleStyle} />
    </button>
  );
};

export default ThemeToggle;
