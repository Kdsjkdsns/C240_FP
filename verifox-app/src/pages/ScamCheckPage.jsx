import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/shared/Reveal.jsx';
import ExampleResultCard from '../components/dashboard/ExampleResultCard.jsx';
import { pageVariants } from '../lib/motion.js';
import styles from '../styles/dashboard.module.css';

const RISK_LEVELS = [
  { range: '0–25', level: 'Low', meaning: 'Few scam signs found', cls: 'riskLow' },
  { range: '26–50', level: 'Medium', meaning: 'Some suspicious signs found', cls: 'riskMedium' },
  { range: '51–75', level: 'High', meaning: 'Many scam signs found', cls: 'riskHigh' },
  { range: '76–100', level: 'Critical', meaning: 'Strong scam signs or immediate danger', cls: 'riskCritical' },
];

function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);
}

export default function ScamCheckPage() {
  useScrollToHash();

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>Run a check</span>
        <h1>Scam Check</h1>
        <p>
          Ask a question, paste a message, or upload a screenshot &mdash; get a risk score and clear next
          steps, checked by a second AI before you see it.
        </p>
      </div>

      <div className={styles.horizontalScroller}>
        <Reveal className={`${styles.card} ${styles.scrollCard}`}>
          <div className={styles.cardHead}>
            <h2>Scam Q&amp;A</h2>
            <span className={`${styles.badge} ${styles.badgeLive}`}>Live</span>
          </div>
          <p>Ask VeriFox anything about scams, like &ldquo;Can police ask me to transfer money?&rdquo;</p>
          <div className={styles.toolPanel}>
            <textarea placeholder="Ask VeriFox about a suspicious message, caller, or link..." />
            <button className={`${styles.btn} ${styles.btnPrimary}`} type="button">Ask now</button>
          </div>
          <div className={styles.resultBox}>
            Suggested answer: &ldquo;Treat this as suspicious until verified. Do not click links or share
            OTPs.&rdquo;
          </div>
        </Reveal>

        <Reveal className={`${styles.card} ${styles.scrollCard}`} delay={0.05}>
          <div className={styles.cardHead}>
            <h2>Message &amp; Link Checker</h2>
            <span className={`${styles.badge} ${styles.badgeLive}`}>Live</span>
          </div>
          <p>Paste a message or link for a risk score and red flags.</p>
          <div className={styles.toolPanel}>
            <textarea placeholder="Paste the message or link here..." />
            <button className={`${styles.btn} ${styles.btnPrimary}`} type="button">Check content</button>
          </div>
          <div className={styles.resultBox}>Risk score: 84/100 — urgent caution and verify through official channels.</div>
        </Reveal>

        <Reveal className={`${styles.card} ${styles.scrollCard}`} delay={0.1}>
          <div className={styles.cardHead}>
            <h2>Screenshot Checker</h2>
            <span className={`${styles.badge} ${styles.badgeLive}`}>Live</span>
          </div>
          <p>Upload a screenshot &mdash; VeriFox reads the text and checks the risk.</p>
          <div className={styles.toolPanel}>
            <input type="file" accept="image/*" />
            <button className={`${styles.btn} ${styles.btnPrimary}`} type="button">Review screenshot</button>
          </div>
          <div className={styles.resultBox}>Detected signs: pressure tactics, urgency, requests for personal details.</div>
        </Reveal>

        <Reveal className={`${styles.card} ${styles.scrollCard}`} delay={0.15}>
          <div className={styles.cardHead}>
            <h2>Risk Score &amp; Level</h2>
          </div>
          <div className={styles.riskTable}>
            <div className={`${styles.riskRow} ${styles.riskHead}`}>
              <span>Score</span>
              <span>Risk Level</span>
              <span>Meaning</span>
            </div>
            {RISK_LEVELS.map((row) => (
              <div className={`${styles.riskRow} ${styles[row.cls]}`} key={row.level}>
                <span>{row.range}</span>
                <span>{row.level}</span>
                <span>{row.meaning}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={`${styles.card} ${styles.scrollCard}`} delay={0.2}>
          <div className={styles.cardHead}>
            <h2>Warning Signs</h2>
          </div>
          <div className={styles.resultBox}>
            &ldquo;Suspicious because it uses urgent language, claims your account is locked, and asks you
            to click an unknown link &mdash; common phishing signs.&rdquo;
          </div>
        </Reveal>
      </div>

      <div className={styles.pageStack}>
        <Reveal className={styles.card}>
          <div className={styles.cardHead}>
            <h2>Recommended Safety Actions</h2>
          </div>
          <p>
            VeriFox recommends the actions that fit the scam it finds &mdash; like avoiding the link, never
            sharing OTPs or bank details, and verifying through official channels.
          </p>
        </Reveal>

        <Reveal className={styles.card} delay={0.05}>
          <div className={styles.cardHead}>
            <h2>Two-Agent Verification</h2>
          </div>
          <p>Two AI agents check every result before you see it.</p>
          <div className={styles.agentGrid}>
            <div className={styles.agentCard}>
              <h3>Agent 1: Analyser</h3>
              <p>Scans your message, link, or screenshot for scam signs.</p>
            </div>
            <div className={styles.agentCard}>
              <h3>Agent 2: Verifier</h3>
              <p>Double-checks the score and advice before showing it.</p>
            </div>
          </div>
        </Reveal>

        <ExampleResultCard />
      </div>
    </motion.div>
  );
}
