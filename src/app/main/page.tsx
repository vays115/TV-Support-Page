'use client';

import SupportPage from '@/components/SupportPage/SupportPage';
import DashboardInfo from '@/components/DashboardInfo/DashboardInfo';

export default function MainPage() {
  return <SupportPage dashboardContent={<DashboardInfo />} />;
}