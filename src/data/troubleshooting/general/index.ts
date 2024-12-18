import { Equipment } from '@/types/troubleshooting';
import { general } from './general';
import { remoteAccess } from './remoteAccess'
import { visiumStb } from './setTopBox'

export const generalSystem: { [key: string]: Equipment } = {
  "General": general,
  'Remote Access': remoteAccess,
  "Visium Set Top Box": visiumStb
};