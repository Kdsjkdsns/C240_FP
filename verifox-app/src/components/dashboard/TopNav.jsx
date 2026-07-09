import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

const TABS = [
  { to: '/', label: 'Overview', end: true },
  { to: '/scam-check', label: 'Scam Check' },
  { to: '/knowledge', label: 'Knowledge' },
  { to: '/reports', label: 'Reports' },
  { to: '/future-plan', label: 'Future Plan' },
];

export default function TopNav({ query, onSearch, searchFeedback }) {
  return (
    <>
      <motion.header
        className={styles.topNav}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.navTabs} role="tablist" aria-label="Dashboard sections">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                isActive ? `${styles.navTab} ${styles.navTabActive}` : styles.navTab
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-tab-pill"
                      className={styles.navTabPill}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={styles.navTabLabel}>{tab.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
          <span className={styles.searchIcon} aria-hidden="true">⌕</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search scam topics"
            aria-label="Search scam topics"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>

        <div className={styles.topNavActions}>
          <button className={styles.iconBtn} type="button" title="Notifications" aria-label="Notifications">
            <span aria-hidden="true">🔔</span>
            <span className={styles.notifDot} />
          </button>
          <div className={styles.profilePill}>
            <span className={styles.profileAvatar}>DT</span>
            <span className={styles.profileInfo}>
              <strong>Daniel Tun</strong>
              <small>VeriFox User</small>
            </span>
          </div>
        </div>
      </motion.header>
      <p className={styles.searchFeedback} role="status">{searchFeedback}</p>
    </>
  );
}
