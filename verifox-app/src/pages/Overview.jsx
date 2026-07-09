import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/dashboard/Hero.jsx';
import RiskOverviewCard from '../components/dashboard/RiskOverviewCard.jsx';
import AnalysisChartCard from '../components/dashboard/AnalysisChartCard.jsx';
import FeatureCardsSection from '../components/dashboard/FeatureCardsSection.jsx';
import WarningTrendsCard from '../components/dashboard/WarningTrendsCard.jsx';
import HowItWorksCard from '../components/dashboard/HowItWorksCard.jsx';
import QuickLinks from '../components/dashboard/QuickLinks.jsx';
import { pageVariants } from '../lib/motion.js';
import styles from '../styles/dashboard.module.css';

export default function Overview() {
  const { query } = useOutletContext();

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <Hero />

      <section className={styles.dashboardGrid}>
        <RiskOverviewCard />
        <AnalysisChartCard />
        <FeatureCardsSection query={query} />
        <WarningTrendsCard />
        <HowItWorksCard />
      </section>

      <QuickLinks />
    </motion.div>
  );
}
