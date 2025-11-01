import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '2rem 0',
      backgroundColor: 'var(--text-dark)',
      color: 'var(--white)',
      textAlign: 'center'
    }}>
      <div className="container">
        <p>&copy; 2023 Buffer. All rights reserved.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="#privacy" style={{ color: 'var(--white)', margin: '0 1rem', textDecoration: 'none' }}>Privacy</a>
          <a href="#terms" style={{ color: 'var(--white)', margin: '0 1rem', textDecoration: 'none' }}>Terms</a>
          <a href="#contact" style={{ color: 'var(--white)', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;