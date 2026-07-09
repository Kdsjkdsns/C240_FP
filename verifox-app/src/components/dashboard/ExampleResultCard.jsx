import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

export default function ExampleResultCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles.exampleResultCard}`}
      id="example-result"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.cardHead}>
        <h2>Sample VeriFox Analysis</h2>
        <span className={`${styles.badge} ${styles.badgeDanger}`}>High Risk</span>
      </div>
      <div className={styles.resultSummaryRow}>
        <div className={styles.resultScoreBadge}>
          <span className={styles.resultScoreValue}>88</span>
          <span className={styles.resultScoreMax}>/100</span>
        </div>
        <div className={styles.resultMeta}>
          <p>
            Risk Level: <strong>High</strong>
          </p>
          <p>
            Possible Scam Type: <strong>Bank Phishing</strong>
          </p>
        </div>
      </div>
      <h3>Summary</h3>
      <p>This message appears suspicious because it claims your account is locked and asks you to click an unknown link.</p>
      <h3>Red Flags</h3>
      <ul className={styles.resultList}>
        <li>Urgent wording</li>
        <li>Suspicious link</li>
        <li>Bank impersonation</li>
        <li>Request for sensitive information</li>
      </ul>
      <h3>Recommended Actions</h3>
      <ul className={styles.resultList}>
        <li>Do not click the link</li>
        <li>Do not share OTPs or passwords</li>
        <li>Verify through official bank channels</li>
      </ul>
    </motion.article>
  );
}
