import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CORE_FEATURES } from '../../data/features.js';
import styles from '../../styles/dashboard.module.css';

export default function FeatureCardsSection({ query }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const normalized = query.trim().toLowerCase();

  return (
    <section className={styles.featureCardsSection} aria-label="Current features" ref={ref}>
      <h2 className={styles.sectionTitle}>What VeriFox Can Do</h2>
      <div className={styles.featureCardsGrid}>
        {CORE_FEATURES.map((feature, i) => {
          const isMatch = normalized.length > 0 && feature.topic.includes(normalized);
          return (
            <motion.article
              key={feature.title}
              className={isMatch ? `${styles.featureCard} ${styles.featureCardMatch}` : styles.featureCard}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
