import { Equipment } from '@/types/troubleshooting';

export const NTSC8: Equipment = {
    commonIssues: [
      {
        title: "8 channels out in a row",
        symptoms: [
          "Unit that is out has no lights",
          "Block of 8 channels out",
          "Black Screen",
          "Skips those channels"
        ],
        quickSolution: "Unplug power to the unit and power it back on",
        troubleshootingSteps: [
          {
            step: 1,
            instruction: "Identify the faulty unit holding the 8 channels",
            details: "Ask staff if they see a unit that has no lights on it and have them power cycle it.",
            question: "Is unit powered on with green status lights and channels back up?",
            failureAction: "Try a different input source",
            image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
            nextStepOnFailure: 2,
            resolvesIssue: true
          },
          {
            step: 2,
            instruction: "Identify next working unit",
            details: "Have staff member identify the next working unit by having them confirm all green lights are on and all channels are working.",
            question: "Have staff member confirmed next working unit?",
            failureAction: "",
            image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
            resolvesIssue: false
          },
          {
            step: 3,
            instruction: "Swap the power cables",
            details: "Have staff member swap the working power cable with the faulty power cable.",
            question: "Did swapping the working power cable to the faulty unit bring it back up?",
            failureAction: "",
            image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
            resolvesIssue: false,
            nextStepOnFailure: 5,
          },
          {
            step: 4,
            instruction: "Move the working power cable back to the original unit",
            details: "We have a bad power cable, escalate the case to Tier 2 for replacement power cable. And confirm that staff moved the working power cable back to the working unit",
            question: "",
            failureAction: "",
            image: "",
            resolvesIssue: false
          },
          {
            step: 5,
            instruction: "Unit is dead, need a replacement",
            details: "Let staff member know that the unit is dead, and will escalate to tier 2.",
            question: "",
            failureAction: "",
            image: "",
            resolvesIssue: false
          }
        ]
      },
      {
        title: "NTSC8 Troubleshooting Walkthrough",
        symptoms: [
          "Sporadic missing channels",
          "Sound issues",
        ],
        quickSolution: "Perform power cycle on the unit holding the channels that are out",
        troubleshootingSteps: [
          {
            step: 1,
            instruction: "Identify the missing channels",
            details: "Ask staff member what channels are missing.",
            question: "Did we confirm the missing channels?",
            failureAction: "",
            image: "",
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
  }
