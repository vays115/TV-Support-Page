'use client';

import { useParams } from 'next/navigation';
import SupportPage from '@/components/SupportPage/SupportPage';
import { troubleshootingData } from '@/data/troubleshooting';

export default function EquipmentPage() {
  const { system, equipment } = useParams();
  const decodedSystem = decodeURIComponent(system as string);
  const decodedEquipment = decodeURIComponent(equipment as string);
  
  if (!troubleshootingData[decodedSystem]?.[decodedEquipment]) {
    return <div>Equipment not found</div>;
  }

  return (
    <SupportPage 
      defaultSystem={decodedSystem} 
      defaultEquipment={decodedEquipment} 
    />
  );
}
