import { SystemData, Equipment } from '@/types/troubleshooting';

export const getEquipmentData = (
  troubleshootingData: SystemData,
  selectedSystem: string | null,
  selectedEquipment: string | null
): Equipment | null => {
  if (!selectedSystem || !selectedEquipment) return null;

  const equipment = troubleshootingData[selectedSystem]?.[selectedEquipment];
  if (!equipment || typeof equipment !== 'object') return null;

  const keys = Object.keys(equipment) as string[];
  if (!keys.length) return null;
  
  const firstKey = keys[0] as keyof typeof equipment;
  return equipment[firstKey];
};