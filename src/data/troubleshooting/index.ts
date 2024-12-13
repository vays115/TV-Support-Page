// main index file for equipment

import { SystemData } from '@/types/troubleshooting';
import { tvSystems } from './tv-systems';
import { miniModsSystem } from './mods-receivers';

// Ensure that `tvSystems` and `miniModsSystem` conform to `Equipment` type
export const troubleshootingData: SystemData = {
  "COM System": tvSystems,
  "Mini Mod Systems": miniModsSystem
};