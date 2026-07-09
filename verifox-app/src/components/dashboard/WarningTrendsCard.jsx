import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

const LABELS = [
  { label: 'Delivery', change: '+24%' },
  { label: 'Bank Phishing', change: '+18%' },
  { label: 'Job Scams', change: '+12%' },
];

export default function WarningTrendsCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles.warningTrendsCard}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.cardHead}>
        <h2>Recent Scam Warning Trends</h2>
        <span className={`${styles.badge} ${styles.badgeWarning}`}>Trending up</span>
      </div>
      <p className={styles.trendSummary}>
        Delivery scams and bank phishing messages are currently high-risk patterns.
      </p>
      <svg className={styles.trendSvg} viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polygon
          points="0,80 40,72 80,74 120,55 160,58 200,36 240,40 300,14 300,100 0,100"
          fill="url(#trendFill)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.polyline
          points="0,80 40,72 80,74 120,55 160,58 200,36 240,40 300,14"
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </svg>
      <div className={styles.trendLabels}>
        {LABELS.map((item, i) => (
          <motion.span
            className={styles.trendLabel}
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
          >
            <strong>{item.label}</strong> {item.change}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
