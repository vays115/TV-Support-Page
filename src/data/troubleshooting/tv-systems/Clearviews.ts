import { Equipment } from '@/types/troubleshooting';

export const Clearviews: Equipment = {
  commonIssues: [
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
