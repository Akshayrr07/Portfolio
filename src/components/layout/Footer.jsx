const Footer = () => {
  const footerStyle = {
    marginTop: '80px',
    padding: '32px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    textAlign: 'center',
  };

  const pStyle = {
    fontSize: '14px',
    color: '#9ca3af',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={pStyle}>
          © 2026 Akshay RR — Built with React, Vite, & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
