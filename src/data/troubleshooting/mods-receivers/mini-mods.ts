import { TroubleshootingStep } from '@/types/troubleshooting';

export const miniMods: TroubleshootingStep[] = [
  { 
    step: 1, 
    instruction: "Check Audio Connection", 
    details: "Verify HDMI or optical cable connection",
    question: "Are audio cables properly connected?",
    failureAction: "Replace audio cables or try alternative connection method"
  },
  { 
    step: 2, 
    instruction: "Test Audio Output", 
    details: "Play test sound through different inputs",
    question: "Is audio playing correctly?",
    failureAction: "Check TV audio settings or soundbar settings"
  }
];