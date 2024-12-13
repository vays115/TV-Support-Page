import { SystemData, Equipment } from '@/types/troubleshooting';

export const getEquipmentData = (
  troubleshootingData: SystemData,
  selectedSystem: string | null,
  selectedEquipment: string | null
): Equipment | null => {
  if (!selectedSystem || !selectedEquipment) return null;
  
  const equipment = troubleshootingData[selectedSystem]?.[selectedEquipment];
  if (!equipment) return null;

  const keys = Object.keys(equipment);
  if (!keys.length) return null;

  return equipment[keys[0]];
};