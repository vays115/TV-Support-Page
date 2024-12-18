import { Equipment } from '@/types/troubleshooting';
import { general } from './general';
import { remoteAccess } from './remoteAccess'

export const generalSystem: { [key: string]: Equipment } = {
  "General": general,
  'Remote Access': remoteAccess
};