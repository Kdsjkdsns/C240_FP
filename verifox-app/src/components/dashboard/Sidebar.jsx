import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

const NAV_ITEMS = [
  { to: '/', icon: '▦', label: 'Dashboard', end: true },
  { to: '/scam-check', icon: '〰', label: 'Scam Check' },
  { to: '/reports', icon: '▣', label: 'Reports' },
  { to: '/knowledge', icon: '◇', label: 'Knowledge' },
];

const UTIL_ITEMS = [{ id: 'users', icon: '👥', label: 'Users' }];

const BOTTOM_ITEMS = [
  { id: 'settings', icon: '⚙', label: 'Settings' },
  { id: 'help', icon: '?', label: 'Help' },
  { id: 'exit', icon: '↪', label: 'Exit' },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function Sidebar() {
  const [activeUtil, setActiveUtil] = useState(null);

  return (
    <motion.aside
      className={styles.sidebar}
      aria-label="Primary"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.sidebarLogo}
        title="VeriFox"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
      >
        <span aria-hidden="true">🦊</span>
      </motion.div>

      <motion.nav className={styles.sidebarNav} variants={listVariants} initial="hidden" animate="visible">
        {NAV_ITEMS.map((item) => (
          <motion.div key={item.to} variants={itemVariants} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}>
            <NavLink
              to={item.to}
              end={item.end}
              title={item.label}
              aria-label={item.label}
              className={({ isActive }) =>
                isActive ? `${styles.sidebarBtn} ${styles.sidebarBtnActive}` : styles.sidebarBtn
              }
            >
              <span aria-hidden="true">{item.icon}</span>
            </NavLink>
          </motion.div>
        ))}
        {UTIL_ITEMS.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className={activeUtil === item.id ? `${styles.sidebarBtn} ${styles.sidebarBtnActive}` : styles.sidebarBtn}
            title={item.label}
            aria-label={item.label}
            onClick={() => setActiveUtil(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
          </motion.button>
        ))}
      </motion.nav>

      <motion.div
        className={`${styles.sidebarNav} ${styles.sidebarNavBottom}`}
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {BOTTOM_ITEMS.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className={activeUtil === item.id ? `${styles.sidebarBtn} ${styles.sidebarBtnActive}` : styles.sidebarBtn}
            title={item.label}
            aria-label={item.label}
            onClick={() => item.id !== 'exit' && setActiveUtil(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.aside>
  );
}
