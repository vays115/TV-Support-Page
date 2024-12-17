import { Equipment } from '@/types/troubleshooting';

export const NTSC8: Equipment = {
  commonIssues: [
    {
      title: "Block of 8 Channels Out (Likely a Faulty NTSC8 Unit)",
      symptoms: [
        "Unit has no lights",
        "Block of 8 channels out",
        "Black Screen on those channels",
        "Channels are skipped when tuning"
      ],
      quickSolution: "Power cycle the affected NTSC8 unit.",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Identify the faulty NTSC8 unit.",
          details: "Ask staff to identify the NTSC8 unit with no lights. Have them power cycle it by unplugging the power cord for 10 seconds and plugging it back in.",
          question: "Is the NTSC8 unit powered on (green status lights) and are the channels back up?",
          failureAction: "2 Possible issue, dead unit or bad power cable.",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
          nextStepOnFailure: 2,
          resolvesIssue: true, // This is true if power cycling fixes the issue
          successMessage: "Post this message in the case: NTS8 unit was power cycled to restore channels",
        },
        {
          step: 2,
          instruction: "Check Connections to the Faulty NTSC8 Unit",
          details: "Ensure the coaxial cable is securely connected to the NTSC8 unit. Check for any damage to the cable.",
          question: "Are the connections secure and is the cable undamaged?",
          failureAction: "Try swapping the coaxial cable with a known good cable. If the problem persists, proceed to next step.",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
          nextStepOnFailure: 3,
          resolvesIssue: false
        },
        {
          step: 3,
          instruction: "Swap the Power Cable",
          details: "Swap the power cable of the faulty NTSC8 unit with a known working power cable from a functioning unit.",
          question: "Did swapping the power cable bring the faulty unit back up?",
          failureAction: "Proceed to next step.",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
          nextStepOnFailure: 5,
          resolvesIssue: false
        },
        {
          step: 4,
          instruction: "Move the working power cable back to the original unit",
          details: "We have a bad power cable, escalate the case to Tier 2 for replacement power cable. And confirm that staff moved the working power cable back to the working unit",
          question: "Is channels back up?",
          failureAction: "Go back and troubleshoot missing channels ",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png", 
          nextStepOnFailure: 5,
          resolvesIssue: true
        },
        {
          step: 5,
          instruction: "NTSC8 Unit Replacement Required",
          details: "The NTSC8 unit is likely faulty and needs replacement. Escalate the issue to Tier 2 for replacement. Ensure the working power and coaxial cables are returned to the working unit.",
          question: "",
          failureAction: "Document the issue and escalate to Tier 2/DIRECTV.",
          image: "",
          resolvesIssue: false
        },
        
      ]
    },
    {
      title: "Sporadic Missing Channels/Sound Issues (Potentially Signal Related)",
      symptoms: [
        "Intermittent missing channels",
        "Sound issues (static, no sound)",
        "Pixelation or freezing on some channels"
      ],
      quickSolution: "Power cycle the affected NTSC8 unit and check all connections.",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Identify the affected channels and NTSC8 unit(s).",
          details: "Ask staff which channels are affected and determine the corresponding NTSC8 unit(s) the channels belong to.",
          question: "Have the affected channels and NTSC8 unit(s) been identified?",
          failureAction: "Check the lineup and ask the staff member to check the units to see if there's any red lights on any of the NTSC8 units",
          image: "",
          resolvesIssue: false
        },
        {
          step: 2,
          instruction: "Idenfity where missing channels are ",
          details: "Ask staff member to see if issues are happening at the headend tv",
          question: "Is issue isolated at the headend?",
          failureAction: "",
          image: "", 
          nextStepOnFailure: 3,
          resolvesIssue: false
        },
        {
          step: 3,
          instruction: "Is issue happening at the whole facility?",
          details: "Confirm with staff if issue happening at the entire facility",
          question: "Is issue at the whole facility?",
          failureAction: "If its at a part of the facility it could be an amp issue",
          image: "", 
          resolvesIssue: false
        },
      ]
    },
  ]
}
