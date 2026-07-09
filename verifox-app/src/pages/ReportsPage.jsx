import { motion } from 'framer-motion';
import Reveal from '../components/shared/Reveal.jsx';
import PdfReportCard from '../components/dashboard/PdfReportCard.jsx';
import { pageVariants } from '../lib/motion.js';
import styles from '../styles/dashboard.module.css';

export default function ReportsPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>Take it with you</span>
        <h1>Reports</h1>
        <p>
          After a scam check is completed, VeriFox can generate a downloadable PDF report &mdash; useful for
          sharing with family, or keeping as evidence.
        </p>
      </div>

      <div className={styles.pageStack}>
        <PdfReportCard />

        <Reveal className={styles.card}>
          <div className={styles.cardHead}>
            <h2>What&rsquo;s included</h2>
          </div>
          <p>
            Each report has the risk score, scam type, summary, red flags, recommended actions, and a
            verification note &mdash; ready to share or keep as evidence.
          </p>
          <p className={styles.featureNote}>
            Report generation only for now &mdash; PDF upload checking is planned, see Future Plan.
          </p>
        </Reveal>
      </div>
    </motion.div>
  );
}
