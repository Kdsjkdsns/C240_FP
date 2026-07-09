import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp.js';
import styles from '../../styles/dashboard.module.css';

const RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SCORE = 88;

const STATS = [
  { label: 'Messages Checked', value: 128 },
  { label: 'Screenshots Analysed', value: 42 },
  { label: 'High Risk Cases', value: 19 },
  { label: 'PDF Reports Generated', value: 11 },
];

export default function RiskOverviewCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const score = useCountUp(SCORE, { start: inView, duration: 1100 });

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles.riskOverviewCard}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.cardHead}>
        <h2>Current Scam Risk Check</h2>
        <span className={`${styles.badge} ${styles.badgeLive}`}>Live</span>
      </div>

      <div className={styles.riskScoreDisplay}>
        <div className={styles.riskRingWrap}>
          <svg className={styles.riskRingSvg} viewBox="0 0 108 108">
            <circle className={styles.riskRingTrack} cx="54" cy="54" r={RADIUS} />
            <motion.circle
              className={styles.riskRingProgress}
              cx="54"
              cy="54"
              r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{
                strokeDashoffset: inView ? CIRCUMFERENCE * (1 - SCORE / 100) : CIRCUMFERENCE,
              }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
          </svg>
          <div className={styles.riskRingInner}>
            <span className={styles.riskValue}>{score}</span>
            <span className={styles.riskMax}>/100</span>
          </div>
        </div>
        <div className={styles.riskMeta}>
          <span className={`${styles.riskPill} ${styles.riskPillHigh}`}>High Risk</span>
          <p>Likely bank phishing content. Verify before clicking or sharing.</p>
        </div>
      </div>

      <div className={styles.riskStats}>
        {STATS.map((stat, i) => (
          <StatCounter key={stat.label} label={stat.label} target={stat.value} start={inView} delay={i * 0.1} />
        ))}
      </div>
    </motion.article>
  );
}

function StatCounter({ label, target, start, delay }) {
  const value = useCountUp(target, { start, duration: 900 + delay * 1000 });

  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.4 }}
    >
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}
