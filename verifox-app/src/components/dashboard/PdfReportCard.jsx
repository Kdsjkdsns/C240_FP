import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

export default function PdfReportCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles.pdfReportCard}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.cardHead}>
        <h2>PDF Report Generation</h2>
        <span className={`${styles.badge} ${styles.badgeLive}`}>Current feature</span>
      </div>
      <p>
        After a scam check, VeriFox can generate a downloadable PDF report with risk score, red flags,
        recommendations, and verification notes.
      </p>
      <motion.button
        type="button"
        className={`${styles.btn} ${styles.btnPrimary}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setShowFeedback(true)}
      >
        Generate Sample Report
      </motion.button>
      <AnimatePresence>
        {showFeedback && (
          <motion.p
            className={styles.pdfFeedback}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            Sample report ready — this is a demo only. Real reports are generated after a live scam check.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
