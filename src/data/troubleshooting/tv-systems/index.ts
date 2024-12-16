import { Equipment } from '@/types/troubleshooting';
import { NTSC8 } from './NTSC8';
import { NTSC16 } from './NTSC16';
import { NTSC32 } from './NTSC32';
import { Clearviews } from './Clearviews';

export const tvSystems: { [key: string]: Equipment } = {
  "NTSC-8": NTSC8,
  "NTSC-16": NTSC16,
  "NTSC-32": NTSC32,
  "Clearviews": Clearviews
};