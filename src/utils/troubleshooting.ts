import { SystemData, Equipment } from '@/types/troubleshooting';

export const getEquipmentData = (
  troubleshootingData: SystemData,
  selectedSystem: string | null,
  selectedEquipment: string | null
): Equipment | null => {
  if (!selectedSystem || !selectedEquipment) return null;

  return troubleshootingData[selectedSystem]?.[selectedEquipment] || null;
};