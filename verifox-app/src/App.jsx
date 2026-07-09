import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Overview from './pages/Overview.jsx';
import ScamCheckPage from './pages/ScamCheckPage.jsx';
import KnowledgePage from './pages/KnowledgePage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import FuturePlanPage from './pages/FuturePlanPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/scam-check" element={<ScamCheckPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/future-plan" element={<FuturePlanPage />} />
      </Route>
    </Routes>
  );
}
