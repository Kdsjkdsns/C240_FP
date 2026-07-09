import { motion } from 'framer-motion';
import Reveal from '../components/shared/Reveal.jsx';
import { pageVariants } from '../lib/motion.js';
import styles from '../styles/dashboard.module.css';

const FUTURE = [
  {
    icon: '📄',
    title: 'PDF Upload Checking',
    text: 'Upload suspicious PDF documents such as fake invoices, job contracts, bank notices, delivery documents, or government letters. VeriFox will extract the text and analyse it for scam signs.',
  },
  {
    icon: '👪',
    title: 'Send to Relative',
    text: 'Send high-risk scam analysis results to a trusted relative via Telegram, WhatsApp, or email — useful when an elderly user needs a family member’s help.',
  },
  {
    icon: '🎙',
    title: 'Voice Assistant',
    text: 'Describe a scam situation by speaking. The voice assistant asks follow-up questions and sends the transcript for scam analysis.',
  },
];

export default function FuturePlanPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>Coming soon</span>
        <h1>Future Plan</h1>
        <p>
          These features were removed from the current scope to keep the project focused, and are planned
          for future versions after the chatbot and screenshot checker are stable.
        </p>
      </div>

      <div className={styles.pageStack}>
        {FUTURE.map((item, i) => (
          <Reveal className={styles.card} key={item.title} delay={i * 0.08}>
            <div className={styles.cardHead}>
              <h2>
                <span aria-hidden="true" style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                {item.title}
              </h2>
              <span className={`${styles.badge} ${styles.badgeFuture}`}>Coming soon</span>
            </div>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </motion.div>
  );
}
