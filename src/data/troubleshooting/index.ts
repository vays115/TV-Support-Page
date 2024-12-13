import { SystemData } from '@/types/troubleshooting';
import { tvSystems } from './tv-systems';
import { miniModsSystem } from './mods-receivers';

export const troubleshootingData: SystemData = {
  "COM System": tvSystems,
  "Mini Mod Systems": miniModsSystem
};