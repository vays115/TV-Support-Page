import { Equipment } from '@/types/troubleshooting';

export const testTVData: Equipment = {
  commonIssues: [
    {
      title: "No Picture But Has Sound",
      symptoms: [
        "Screen is black",
        "Audio is working normally",
        "Power light is on"
      ],
      quickSolution: "Check input source selection and verify HDMI/video cable connections",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Check Input Source",
          details: "Press the Input/Source button on your TV remote and cycle through available inputs",
          question: "Is the correct input source selected?",
          failureAction: "Try a different input source"
        },
        {
          step: 2,
          instruction: "Verify Cable Connections",
          details: "Check that all HDMI or video cables are firmly connected",
          question: "Are all cables securely connected?",
          failureAction: "Reconnect cables or try different ports"
        }
      ]
    },
    {
      title: "TV Won't Turn On",
      symptoms: [
        "No response to power button",
        "No lights visible",
        "No sound"
      ],
      quickSolution: "Perform power cycle: unplug TV for 1 minute, then plug back in",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Power Cycle Check",
          details: "Unplug the TV from power, wait 60 seconds, then plug back in",
          question: "Did the TV power up?",
          failureAction: "Proceed to check power outlet",
          image: "",
          nextStepOnFailure: 3
        },
        {
          step: 2,
          instruction: "Check Power Outlet",
          details: "Test the outlet with another device",
          question: "Does the other device work in this outlet?",
          failureAction: "Try a different outlet or check circuit breaker"
        }
      ]
    }
  ]
};



