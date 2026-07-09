import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

const CATEGORIES = [
  { label: 'Phishing', total: 92, high: 61 },
  { label: 'Delivery', total: 84, high: 55 },
  { label: 'Job', total: 68, high: 34 },
  { label: 'Bank', total: 76, high: 48 },
  { label: 'Govt', total: 52, high: 22 },
  { label: 'Investment', total: 40, high: 18 },
];

export default function AnalysisChartCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles.analysisChartCard}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
    >
      <div className={styles.cardHead}>
        <h2>Scam Pattern Overview</h2>
        <div className={styles.chartLegend}>
          <span className={styles.legendItem}>
            <i className={`${styles.legendSwatch} ${styles.legendSwatchTotal}`} />
            Total reports
          </span>
          <span className={styles.legendItem}>
            <i className={`${styles.legendSwatch} ${styles.legendSwatchHigh}`} />
            High risk
          </span>
        </div>
      </div>
      <div className={styles.barChart}>
        {CATEGORIES.map((cat, i) => (
          <div className={styles.barGroup} key={cat.label}>
            <div className={styles.barPair}>
              <motion.div
                className={`${styles.bar} ${styles.barTotal}`}
                style={{ height: `${cat.total}%` }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              />
              <motion.div
                className={`${styles.bar} ${styles.barHigh}`}
                style={{ height: `${cat.high}%` }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.1, ease: 'easeOut' }}
              />
            </div>
            <span className={styles.barLabel}>{cat.label}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
