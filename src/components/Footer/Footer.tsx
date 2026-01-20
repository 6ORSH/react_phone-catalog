import React from 'react';
import styles from './Footer.module.scss';

const GITHUB_URL = 'https://github.com/mate-academy/react_phone-catalog';

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GitHub Repo
        </a>
        <button className={styles.backToTop} onClick={handleBackToTop}>
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
