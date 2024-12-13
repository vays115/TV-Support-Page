import { Equipment } from '@/types/troubleshooting';
import { testTVData } from './test';
import { NTSC8 } from './NTSC8';

export const tvSystems: { [key: string]: Equipment } = {
  "system": testTVData,
  "NTSC-8": NTSC8,
};