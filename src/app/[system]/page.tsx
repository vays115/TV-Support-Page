'use client';

import { useParams } from 'next/navigation';
import SupportPage from '@/components/SupportPage/SupportPage';
import { troubleshootingData } from '@/data/troubleshooting';

export default function SystemPage() {
  const { system } = useParams();
  const decodedSystem = decodeURIComponent(system as string);
  
  if (!troubleshootingData[decodedSystem]) {
    return <div>System not found</div>;
  }

  return <SupportPage defaultSystem={decodedSystem} />;
}

