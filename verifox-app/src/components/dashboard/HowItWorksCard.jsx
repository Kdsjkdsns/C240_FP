import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/dashboard.module.css';

const STEPS = [
  { n: 1, title: 'Submit', text: 'Paste a message, link, or upload a screenshot.' },
  {
    n: 2,
    title: 'Analyse',
    text: 'VeriFox checks suspicious links, urgency, impersonation, OTP requests, and money pressure.',
  },
  { n: 3, title: 'Verify', text: 'A second AI agent reviews the result for safer advice.' },
  { n: 4, title: 'Act Safely', text: 'Receive a risk score, explanation, and recommended actions.' },
];

export default function HowItWorksCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles.howItWorksCard}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
    >
      <div className={styles.cardHead}>
        <h2>How It Works</h2>
      </div>
      <ol className={styles.stepsList}>
        {STEPS.map((step, i) => (
          <motion.li
            key={step.n}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <span className={styles.stepCircle}>{step.n}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.article>
  );
}
