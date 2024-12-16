import { Equipment } from '@/types/troubleshooting';

export const NTSC16: Equipment = {
  commonIssues: [
    {
        title: "Block of 16 Channels Out (Likely a Faulty Unit)",
        symptoms: [
          "Unit has no lights",
          "Block of 16 channels out",
          "Black Screen on those channels",
          "Channels are skipped when tuning"
        ],
        quickSolution: "Power cycle the affected NTSC16 unit.",
        troubleshootingSteps: [
          {
            step: 1,
            instruction: "Identify the faulty NTSC16 unit.",
            details: "Ask staff to identify the NTSC16 unit with no lights. Have them power cycle it by unplugging the power cord for 10 seconds and plugging it back in.",
            question: "Is the NTSC16 unit powered on (green status lights) and are the channels back up?",
            failureAction: "Proceed to next step.",
            image: "",
            resolvesIssue: true // This is true if power cycling fixes the issue
          },
          {
            step: 2,
            instruction: "Check Connections to the Faulty NTSC16 Unit",
            details: "Ensure the coaxial cable is securely connected to the NTSC8 unit. Check for any damage to the cable.",
            question: "Are the connections secure and is the cable undamaged?",
            failureAction: "",
            image: "",
            nextStepOnFailure: 2,
            resolvesIssue: false
          },
          {
            step: 3,
            instruction: "Swap the Power Cable",
            details: "Swap the power cable of the faulty NTSC8 unit with a known working power cable from a functioning unit.",
            question: "Did swapping the power cable bring the faulty unit back up?",
            failureAction: "Proceed to next step.",
            image: "",
            nextStepOnFailure: 5,
            resolvesIssue: false
          },
          {
            step: 4,
            instruction: "Move the working power cable back to the original unit",
            details: "We have a bad power cable, escalate the case to Tier 2 for replacement power cable. And confirm that staff moved the working power cable back to the working unit",
            question: "",
            failureAction: "",
            image: "", 
            nextStepOnFailure: 4,
            resolvesIssue: true
          },
          {
            step: 5,
            instruction: "Log into the remote access computer",
            details: "Lets log into the remote access computer to see if we can get remote access to the NTSC16 unit.",
            question: "Were you able to get remote access",
            failureAction: "Run through the remote access troubleshooting steps.",
            image: "",
            resolvesIssue: false
          }
        ]
      },
  ]

}
