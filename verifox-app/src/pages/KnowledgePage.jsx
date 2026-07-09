import { motion } from 'framer-motion';
import Reveal from '../components/shared/Reveal.jsx';
import { pageVariants } from '../lib/motion.js';
import styles from '../styles/dashboard.module.css';

const AUDIENCE = [
  { user: 'Students', reason: 'May receive fake job offers, phishing links, scam messages, or fake giveaways' },
  { user: 'Elderly users', reason: 'May be more vulnerable to scam calls and impersonation messages' },
  { user: 'General Singapore users', reason: 'May receive scam SMS, WhatsApp, Telegram, email, or website links' },
  { user: 'Families', reason: 'Can use VeriFox to help check suspicious messages for relatives' },
  { user: 'Non-technical users', reason: 'Need simple explanations and clear safety actions' },
];

const KB_TOPICS = [
  'Phishing scams',
  'Bank impersonation scams',
  'Government or police impersonation scams',
  'Delivery scams',
  'Job scams',
  'OTP and password safety',
  'Suspicious links',
  'What to do after sharing sensitive information',
  'What to do after transferring money',
  'ScamShield and Singapore scam safety guidance',
];

const VALUES = [
  { title: 'Clear guidance', text: 'VeriFox focuses on warning signs and safety actions, not just a binary yes/no answer.' },
  { title: 'Singapore aware', text: 'Advice reflects local scam behaviours, reporting channels, and examples that resonate with users in Singapore.' },
  { title: 'Trusted tone', text: 'The assistant is calm, practical and designed to reduce fear while staying truthful about risk.' },
];

export default function KnowledgePage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>Why VeriFox exists</span>
        <h1>Knowledge</h1>
        <p>
          Scams in Singapore often pretend to be banks, government agencies, or delivery services. VeriFox
          is built on Singapore-focused scam-safety knowledge to help you tell what&rsquo;s real.
        </p>
      </div>

      <div className={styles.pageStack}>
        <Reveal className={styles.card}>
          <div className={styles.cardHead}>
            <h2>The problem &amp; the need</h2>
          </div>
          <p>
            Not knowing if a message is safe can lead to clicking phishing links or sharing OTPs and bank
            details. VeriFox explains what&rsquo;s suspicious and how to stay safe &mdash; in plain language.
          </p>
        </Reveal>

        <Reveal className={styles.card} delay={0.05}>
          <div className={styles.cardHead}>
            <h2>Target Audience</h2>
          </div>
          <div className={styles.audienceTable}>
            <div className={`${styles.audienceRow} ${styles.audienceHead}`}>
              <span>Target User</span>
              <span>Reason</span>
            </div>
            {AUDIENCE.map((row) => (
              <div className={styles.audienceRow} key={row.user}>
                <span>{row.user}</span>
                <span>{row.reason}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.card} delay={0.1}>
          <div className={styles.cardHead}>
            <h2>Singapore Scam Knowledge Base</h2>
            <span className={`${styles.badge} ${styles.badgeLive}`}>RAG-backed</span>
          </div>
          <p>VeriFox retrieves from a Singapore-focused knowledge base covering:</p>
          <ul className={`${styles.bulletList} ${styles.bulletListCompact}`}>
            {KB_TOPICS.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <div className={styles.valuesGrid}>
            {VALUES.map((value) => (
              <div className={styles.valuesCard} key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </motion.div>
  );
}
