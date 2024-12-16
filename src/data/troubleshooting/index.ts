// main index file for equipment

import { SystemData } from '@/types/troubleshooting';
import { tvSystems } from './tv-systems';
import { miniModsSystem } from './mods-receivers';
import { generalSystem } from './general';

// Ensure that `tvSystems` and `miniModsSystem` conform to `Equipment` type
export const troubleshootingData: SystemData = {
  "General": generalSystem,
  "COM System": tvSystems,
  "Receiver Based Systems": miniModsSystem,
};