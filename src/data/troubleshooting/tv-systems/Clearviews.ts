import { Equipment } from '@/types/troubleshooting';

export const Clearviews: Equipment = {
  commonIssues: [
    {
      title: "Block of all 24 Channels Out (Likely a Faulty Clearview Unit)",
      symptoms: [
        "Unit has no lights",
        "Block of 24 channels out",
        "Black Screen on those channels",
        "Channels are skipped when tuning"
      ],
      quickSolution: "Power cycle the affected Clearview unit.",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Identify the faulty Clearview unit.",
          details: "Ask staff to identify the Clearview unit with no lights. Have them power cycle it by unplugging the power cord for 30 seconds and plugging it back in.",
          question: "Is the Clearview unit powered on (green power and temperature lights) and are the channels back up?",
          failureAction: "2 Possible issue, dead unit or bad power cable.",
          image: "",
          nextStepOnFailure: 2,
          resolvesIssue: true, 
          successMessage: "Post this message in the case: Clearview unit was power cycled to restore channels",
        },
        {
          step: 2,
          instruction: "Check Connections to the Faulty Clearview Unit",
          details: "Ensure the coaxial cable is securely connected to the Clearview unit. Check for any damage to the cable.",
          question: "Are the connections secure and is the cable undamaged?",
          failureAction: "Try swapping the coaxial cable with a known good cable. If the problem persists, proceed to next step.",
          image: "",
          nextStepOnFailure: 3,
          resolvesIssue: false
        },
        {
          step: 3,
          instruction: "Swap the Power Cable",
          details: "Swap the power cable of the faulty Clearview unit with a known working power cable from a functioning unit.",
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
          question: "Are channels back up?",
          failureAction: "Go back and troubleshoot missing channels.",
          image: "", 
          nextStepOnFailure: 5,
          resolvesIssue: true
        },
        {
          step: 5,
          instruction: "Clearview Unit Replacement Required",
          details: "The Clearview unit is likely faulty and needs replacement. Escalate the issue to Tier 2 for replacement. Ensure the working power and coaxial cables are returned to the working unit.",
          question: "",
          failureAction: "Document the issue and escalate to Tier 2/DIRECTV.",
          image: "",
          resolvesIssue: false
        }
      ]
    },
    {
      title: "One or more Channels Missing (Likely Service Not Authorized)",
      symptoms: [
        "One or more channels are out",
        "No lights on Status lights on Clearview",
        "Black Screen on those channels",
        "Channels are skipped when tuning"
      ],
      quickSolution: "Send Global Hit.",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Identify the faulty Clearview unit.",
          details: "Ask staff to identify the Clearview unit with no lights. Have them power cycle it by unplugging the power cord for 30 seconds and plugging it back in.",
          question: "Is the Clearview unit powered on (green power and temperature lights) and are the channels back up?",
          failureAction: "2 Possible issue, dead unit or bad power cable.",
          image: "",
          nextStepOnFailure: 2,
          resolvesIssue: true, // This is true if power cycling fixes the issue
          successMessage: "Post this message in the case: Clearview unit was power cycled to restore channels",
        },
        {
          step: 2,
          instruction: "Check Clearview remotely for transcoding.",
          details: "Log into the Clearview through remote access to check if all channels are showing transcoding. Under Encoder > Status all channels should be green.",
          question: "Are there red channels or any errors in the Log for the Clearview?",
          failureAction: "If you see Red or Grey on status page, Proceed to next step.",
          image: "",
          nextStepOnFailure: 4,
          resolvesIssue: false
        },
        {
          step: 3,
          instruction: "Check Connections to the Faulty Clearview Unit",
          details: "Ensure the coaxial cable is securely connected to the Clearview unit. Check for any damage to the cable.",
          question: "Are the connections secure and is the cable undamaged?",
          failureAction: "Try swapping the coaxial cable with a known good cable. If the problem persists, proceed to next step.",
          image: "",
          nextStepOnFailure: 4,
          resolvesIssue: false
        },
        {
          step: 4,
          instruction: "Power cycle Clearview unit and send Global Hits",
          details: "Send global hits to all equipment for account and power cycle or reboot Affected Clearview Unit/s",
          question: "Did power cycling the Clearview unit bring all channels back up?",
          failureAction: "Proceed to next step.",
          image: "",
          nextStepOnFailure: 5,
          resolvesIssue: true, // This is true if power cycling with Global hit fixes the issue
          successMessage: "Post this message in the case: Clearview unit was power cycled and global hits were sent to restore channels",
        },
        {
          step: 5,
          instruction: "Power cycle Com400 cards and then Clearview unit.",
          details: "Power cycle the affected Com cards which the channels are missing from wait 5 seconds, then power cycle affected Clearview unit.",
          question: "Are channels back up?",
          failureAction: "Proceed to next step.",
          image: "", 
          nextStepOnFailure: 6,
          resolvesIssue: false
        },
        {
          step: 6,
          instruction: "Swap Affected Com400 card to different slot on Com400 Chassis, Power cycle Clearview unit",
          details: "Swap the affected Com card to different slot on Com Chassis, then power cycle affected Clearview Unit. Check Clearview remotely to see if channel issues resolve.",
          question: "Are channels back up?",
          failureAction: "Go back and troubleshoot missing channels ",
          image: "", 
          nextStepOnFailure: 7,
          resolvesIssue: true, // This is true if power cycling with Global hit fixes the issue
          successMessage: "Post this message in the case: Com card moved to different slot on Com chassis, restored clearview. Possible Card or Chassis issue.",
        },
        {
          step: 7,
          instruction: "Check Status lights again and Power cycle Headend",
          details: "Power cycle Headend by pulling power cable to power strip on back of Headend for 1 minute. Check to make sure all devices power back on and remote access is available.",
          question: "Are channels back up?",
          failureAction: "Is the Clearview still missing lights on Status Lights area? If so, Proceed to Next steps",
          image: "",
          nextStepOnFailure: 8,
          resolvesIssue: true,  // This is true if power cycling entire Headend fixes the issue
          successMessage: "Post this message in the case: Power cycling entire rack has brought com cards and Clearviews back up, and all Status lights are showing green.",
        },
        {
          step: 8,
          instruction: "Clearview Unit Replacement Required",
          details: "The Clearview unit is likely faulty and needs replacement. Escalate the issue to Tier 2 for replacement. Ensure the working power and coaxial cables are returned to the working unit.",
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
      quickSolution: "Power cycle the affected Clearview unit and check all connections.",
      troubleshootingSteps: [
        {
          step: 1,
          instruction: "Identify the affected channels and Clearview unit(s).",
          details: "Ask staff which channels are affected and determine the corresponding Clearview unit(s) the channels belong to.",
          question: "Have the affected channels and Clearview unit(s) been identified?",
          failureAction: "Check the lineup and ask the staff member to check the units to see if there's any red lights on any of the Clearview units",
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
