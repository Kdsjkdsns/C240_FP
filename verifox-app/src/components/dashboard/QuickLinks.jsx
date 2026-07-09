import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../shared/Reveal.jsx';
import styles from '../../styles/dashboard.module.css';

const LINKS = [
  { to: '/scam-check', icon: '〰', title: 'Scam Check', text: 'Run a message, link, or screenshot check.' },
  { to: '/knowledge', icon: '◇', title: 'Knowledge', text: 'Singapore scam patterns and safety guidance.' },
  { to: '/reports', icon: '▣', title: 'Reports', text: 'Generate a downloadable PDF analysis.' },
  { to: '/future-plan', icon: '✦', title: 'Future Plan', text: 'See what VeriFox is building next.' },
];

export default function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      {LINKS.map((link, i) => (
        <Reveal key={link.to} delay={i * 0.06}>
          <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <Link className={styles.quickLinkCard} to={link.to}>
              <h3>
                <span aria-hidden="true">{link.icon}</span>
                {link.title}
                <span className={styles.quickLinkArrow} aria-hidden="true">→</span>
              </h3>
              <p>{link.text}</p>
            </Link>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
