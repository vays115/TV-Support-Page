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
          failureAction: "Proceed to next step.",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png",
          nextStepOnFailure: 2,
          resolvesIssue: true // This is true if power cycling fixes the issue
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
          question: "",
          failureAction: "",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png", 
          nextStepOnFailure: 4,
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
        }
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
          details: "Ask staff which channels are affected and in which rooms/locations. Determine the corresponding NTSC8 unit(s).",
          question: "Have the affected channels and NTSC8 unit(s) been identified?",
          failureAction: "",
          image: "",
          resolvesIssue: false
        },
        {
          step: 2,
          instruction: "Check Connections",
          details: "Check all cable connections to the affected NTSC8 unit(s), including the coaxial cable from the COM400 module and the output to the TV. Ensure they are secure and undamaged.",
          question: "Are all connections secure and undamaged?",
          failureAction: "Try reseating or replacing the cables. If the problem persists, proceed to the next step.",
          image: "", // Add image of cable connections if possible
          nextStepOnFailure: 3,
          resolvesIssue: false
        },
        {
          step: 3,
          instruction: "Power Cycle Affected NTSC8 Unit(s)",
          details: "Unplug the power cord of the affected NTSC8 unit(s) for 10 seconds and plug it back in.",
          question: "Have the channels returned after power cycling?",
          failureAction: "Proceed to next step.",
          image: "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/f5770e41eb59459ab7540b815e52a170a0f91cc0b97411efbe932dfa57685a32.png", 
          nextStepOnFailure: 4,
          resolvesIssue: true
        },
        {
          step: 4,
          instruction: "Check COM400 Port Status (Advanced)",
          details: "If the issue persists, check the link status of the COM400 port connected to the affected NTSC8 unit. A red light indicates a problem. Contact Tier 2/DIRECTV for assistance with the COM400 system.",
          question: "Is the COM400 port showing a green (working) status?",
          failureAction: "Escalate to Tier 2/DIRECTV for assistance with COM400 diagnostics.",
          image: "", // Add image of COM400 port if available
          resolvesIssue: false
        },
                {
          step: 5,
          instruction: "Escalate to Tier 2/DIRECTV",
          details: "If the issue persists after trying all the above steps, escalate the issue to Tier 2 support or DIRECTV directly. There might be a signal issue, COM3000 system problem, or other issue requiring advanced diagnostics.",
          question: "",
          failureAction: "Document all troubleshooting steps taken and provide details to Tier 2/DIRECTV.",
          image: "",
          resolvesIssue: false
        }
      ]
    }
  ]

}
