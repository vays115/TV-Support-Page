import { Equipment } from '@/types/troubleshooting';

export const remoteAccess: Equipment = {
    commonIssues: [
      {
        title: "Gaining Remote Access to the Headend",
        symptoms: [
            "",
        ],
        quickSolution: "",
        troubleshootingSteps: [
            {
                "step": 1,
                "instruction": "Search LogMeIn for community name",
                "details": "Type in the community name in Logmein to see if you can find the remote access computer",
                "question": "Were you able to find the remote access comp and login successfully?",
                "failureAction": "Check Apptivo to see if you're able to find the remote access computer serial. Or skip to step 4 for troubleshooting the comp and the switch/router",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/64da43c8a78c434fba525efa93a0ee9c801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 2,
                "resolvesIssue": true,
                "successMessage": "You now have access please continue troubleshooting the specific system type"
              },
              {
                "step": 2,
                "instruction": "Check Apptivo for remote access computer serial",
                "details": "Log into Apptivo to see if you can find the remote access computer serial in the channel lineup",
                "question": "Were you able to find the remote access comp and login successfully?",
                "failureAction": "Lets Ask staff member to identify the remote access comp, messagenow, or guidenow on the headend. Or skip to step 4 for troubleshooting the comp and the switch/router",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/80cb33544ec94230be71aa9521d31877801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 3,
                "resolvesIssue": true,
                "successMessage": "You now have access please continue troubleshooting the specific system type"
              },
              {
                "step": 3,
                "instruction": "Find Comp at the headend",
                "details": "Ask staff member to identify the remote access comp, messagenow, or guidenow on the headend",
                "question": "Were you able to find the remote access comp and login successfully?",
                "failureAction": "Lets troubleshoot the comp and the switch/router. Or skip to step 4 for troubleshooting the comp and the switch/router",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/85d4a4661e28452a8ae7f6e37b41ab5ed68def20bd6411ef83b495f6a0c0f853.png",
                "nextStepOnFailure": 4,
                "resolvesIssue": true,
                "successMessage": "You now have access please continue troubleshooting the specific system type"
              },
              {
                "step": 4,
                "instruction": "Check the power light on the remote access computer",
                "details": "Confirm with a staff member if the remote access computer has a blue, red, or no light on the power button.",
                "question": "Ask if light is blue, red, or no light. Blue light = Step 5 click yes, Red light = Step 6, No light = Step 7",
                "failureAction": "Proceed to the relevant step below based on light status.",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/df84c38a01ae4221aa0a457d0f7b642d801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 5,
                "resolvesIssue": false,
                "successMessage": "The computer is now powered on. Refresh LogMeIn to check if it's back up."
              },
              {
                "step": 5,
                "instruction": "If light is blue, power off and on",
                "details": "Power cycle the remote access computer if the light is blue.",
                "question": "Did power cycling provide remote access?",
                "failureAction": "Proceed to check the D-Link router and switch.",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/df84c38a01ae4221aa0a457d0f7b642d801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 8,
                "resolvesIssue": true,
                "successMessage": "The computer is powered on. Refresh LogMeIn to check if it's back up."
              },
              {
                "step": 6,
                "instruction": "If light is red, power off and on",
                "details": "Power cycle the remote access computer if the light is red.",
                "question": "Did power cycling provide remote access?",
                "failureAction": "Proceed to check the D-Link router and switch.",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/df84c38a01ae4221aa0a457d0f7b642d801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 8,
                "resolvesIssue": true,
                "successMessage": "The computer is powered on. Refresh LogMeIn to check if it's back up."
              },
              {
                "step": 7,
                "instruction": "If no lights, power off and on and check again",
                "details": "Power off and on the computer. If no light after that, click no.",
                "question": "",
                "failureAction": "Escalate the issue and note '1-GUIDENOW-WINDOWS needs to be ordered.'",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/df84c38a01ae4221aa0a457d0f7b642d801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 7,
                "resolvesIssue": false,
                "successMessage": "Continue troubleshooting without remote access. But note GUIDENOW-WINDOWS needs to be ordered."
              },
              {
                "step": 8,
                "instruction": "Check the lights on the D-Link router and the switch",
                "details": "Ask staff to confirm if the lights on the D-Link router and the switch are active. Router lights should be solid, and the remote access ethernet port should be flashing.",
                "question": "Are all lights on the D-Link router and switch functioning?",
                "failureAction": "If no lights are visibile on the either piece of equipment please continue troubleshooting without remote access. And post in the case notes that the D-Link router and switch need to be replaced.",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/18f8e63e84404a488fff43e71aa8521e801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 9,
                "resolvesIssue": false,
                "successMessage": "Lights on the D-Link router and switch are active. Continue troubleshooting."
              },
              {
                "step": 9,
                "instruction": "Reset the D-Link Router and switch",
                "details": "Unplug the power cords for both the D-Link Router and switch for 30 seconds, then plug them back in.",
                "question": "Are all lights on the D-Link router back up and remote access restored?",
                "failureAction": "Reseat the ethernet cord for the remote access computer.",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/1a8e981713bc4752aa2c57e1fa79fb6a801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 10,
                "resolvesIssue": false,
                "successMessage": "Router and switch are reset. Refresh LogMeIn to check if the computer is back up."
              },
              {
                "step": 10,
                "instruction": "Reseat the ethernet cord",
                "details": "Have staff reseat the ethernet cord on both ends of the connection.",
                "question": "Did reseating the ethernet cord provide remote access?",
                "failureAction": "Possibly bad remote access computer. Please note that in case notes. Continue with troubleshooting system/equipment without remote access.",
                "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/18f8e63e84404a488fff43e71aa8521e801296f0bd5011efaeef917b1f500685.png",
                "nextStepOnFailure": 10,
                "resolvesIssue": false,
                "successMessage": "Ethernet cord reseated successfully. Refresh LogMeIn to check if the computer is back up."
              },
              {
                "step": 11,
                "instruction": "Escalate the issue",
                "details": "If all previous steps fail, escalate the issue and document the troubleshooting steps taken.",
                "question": "Has the issue been escalated and documented?",
                "failureAction": "Review all troubleshooting steps for any missed actions.",
                "image": "",
                "nextStepOnFailure": 12,
                "resolvesIssue": true,
                "successMessage": "Continue troubleshooting the system/equipment type without remote access."
              }
        ]
      },
    ]
  };