import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/dashboard.module.css';
import Sidebar from '../components/dashboard/Sidebar.jsx';
import TopNav from '../components/dashboard/TopNav.jsx';
import { CORE_FEATURES } from '../data/features.js';

export default function DashboardLayout() {
  const [query, setQuery] = useState('');

  const normalized = query.trim().toLowerCase();
  const matches = CORE_FEATURES.filter((f) => normalized.length > 0 && f.topic.includes(normalized));
  let searchFeedback = '';
  if (normalized.length > 0) {
    searchFeedback =
      matches.length > 0
        ? `Found ${matches.length} matching feature${matches.length > 1 ? 's' : ''} for "${query}".`
        : `No matching feature found for "${query}". Try asking VeriFox directly in the chat bubble.`;
  }

  return (
    <div className={styles.dashboardTheme}>
      <div className={`${styles.bgGlow} ${styles.bgGlow1}`} />
      <div className={`${styles.bgGlow} ${styles.bgGlow2}`} />
      <div className={`${styles.bgGlow} ${styles.bgGlow3}`} />

      <div className={styles.appShell}>
        <Sidebar />

        <main className={styles.mainDashboard}>
          <TopNav query={query} onSearch={setQuery} searchFeedback={searchFeedback} />
          <Outlet context={{ query }} />

          <footer className={styles.footerNote}>
            <p className={styles.disclaimerText}>
              VeriFox provides scam safety guidance based on available information and retrieved
              scam-safety knowledge. It does not replace official advice from banks, ScamShield, or the
              Singapore Police Force. If money or sensitive information was shared, contact the relevant
              official organisation immediately.
            </p>
            <p className={styles.footerTagline}>VeriFox &mdash; Ask VeriFox before you trust.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
