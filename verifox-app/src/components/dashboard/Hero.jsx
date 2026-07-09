import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

export default function Hero() {
  return (
    <motion.section
      className={styles.heroSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
    >
      <div className={styles.heroText}>
        <span className={styles.eyebrow}>Scam safety command center</span>
        <h1>Hi, welcome to VeriFox</h1>
        <p className={styles.heroTagline}>Ask VeriFox before you trust.</p>
        <p className={styles.heroSub}>
          Check suspicious messages, links, and screenshots using AI-powered scam risk analysis for
          Singapore users.
        </p>
        <div className={styles.heroActions}>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} to="/scam-check">
              Start Scam Check
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link className={`${styles.btn} ${styles.btnGhost}`} to="/scam-check#example-result">
              View Demo Result
            </Link>
          </motion.div>
        </div>
        <p className={styles.heroNote}>
          Prefer to type it out loud? Use the VeriFox chat bubble in the bottom-right corner instead.
        </p>
      </div>
      <div className={styles.heroOrb} aria-hidden="true">
        <motion.img
          src="/Logo_Transparency.png"
          alt=""
          className={styles.heroOrbIcon}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.section>
  );
}
