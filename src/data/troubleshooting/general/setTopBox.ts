import { Equipment } from '@/types/troubleshooting';

export const visiumStb: Equipment = {
    commonIssues: [
        {
            title: "Visium STB Set Up",
            symptoms: [

            ],
            quickSolution: "",
            troubleshootingSteps: [
                {
                    "step": 1,
                    "instruction": "Plug everything in",
                    "details": "Connect all necessary cables (power, HDMI, and coax) to the Visium Set Top Box.",
                    "question": "Are all cables securely connected?",
                    "failureAction": "Check each connection (power, HDMI, and coax) and try again.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/7531376bdf264954b865e9aa9f188cf8f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 1,
                    "resolvesIssue": false,
                    "successMessage": "Cables are connected. Proceed to power on the TV."
                  },
                  {
                    "step": 2,
                    "instruction": "Turn on the TV and set the correct input",
                    "details": "Power on the TV and set the input to the HDMI or AV source connected to the Visium box.",
                    "question": "Is the correct input selected on the TV?",
                    "failureAction": "Double-check the TV input source and connections.",
                    "image": "",
                    "nextStepOnFailure": 2,
                    "resolvesIssue": false,
                    "successMessage": "Input is set correctly. You should see the Visium boot screen."
                  },
                  {
                    "step": 3,
                    "instruction": "Wait for the Visium to boot up",
                    "details": "The Visium box will boot up and restart upon reaching 100%. Wait 30 seconds as the screen goes black.",
                    "question": "Did the Visium restart and display a black screen?",
                    "failureAction": "Confirm thhe correct input and power cycle the visium",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/2207b2ffa21f4216b97c62feaa67a734f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 3,
                    "resolvesIssue": false,
                    "successMessage": "Visium has successfully booted. Proceed to access the setup menu."
                  },
                  {
                    "step": 4,
                    "instruction": "Access the setup menu",
                    "details": "Using the remote, press '5011602'. A pop-up should appear on the bottom of the screen.",
                    "question": "Did the code appear like in the picture?",
                    "failureAction": "Retry pressing '5011602' carefully on the remote.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/74218e6550ff474c9ce601f4f8c8be75f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 4,
                    "resolvesIssue": false,
                    "successMessage": "Setup menu accessed. Continue to Local Mode settings."
                  },
                  {
                    "step": 5,
                    "instruction": "Enable Local Mode",
                    "details": "Navigate to 'Local Mode' using the remote. Press the '>' key to enable Local Mode. A checkbox will appear next to 'Enable'.",
                    "question": "Is Local Mode enabled?",
                    "failureAction": "Retry enabling Local Mode by pressing the '>' key.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/abb3690fd1ec4faf9302198af0055922f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 5,
                    "resolvesIssue": false,
                    "successMessage": "Local Mode enabled. Proceed to time settings."
                  },
                  {
                    "step": 6,
                    "instruction": "Set the correct time zone",
                    "details": "Go to 'Time Settings', then 'Time Zone', and select the appropriate time zone.",
                    "question": "Did you set the correct time zone?",
                    "failureAction": "Recheck the time zone settings.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/e43c7d2fc3644b219f4b60142f796f9df1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 6,
                    "resolvesIssue": false,
                    "successMessage": "Time zone set. Return to Local Mode for channel lineup."
                  },
                  {
                    "step": 7,
                    "instruction": "Navigate to Channel Lineup",
                    "details": "In 'Local Mode', select 'Channel Lineup' to begin the QAM scan.",
                    "question": "Did you access the Channel Lineup menu?",
                    "failureAction": "Retry accessing the menu in Local Mode.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/2ac5b275a12a43f6a8c749fc69970849f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 7,
                    "resolvesIssue": false,
                    "successMessage": "Channel Lineup accessed. Begin QAM scanning."
                  },
                  {
                    "step": 8,
                    "instruction": "Run QAM Scan",
                    "details": "Click 'QAM Scan', then 'Start', and wait for the scan to complete (100%). Click 'Save' once finished.",
                    "question": "Did the QAM scan complete successfully?",
                    "failureAction": "Retry the QAM scan from the beginning.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/2ac5b275a12a43f6a8c749fc69970849f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 8,
                    "resolvesIssue": false,
                    "successMessage": "QAM scan completed and saved. Return to Local Mode."
                  },
                  {
                    "step": 9,
                    "instruction": "Set Power On Behavior",
                    "details": "Navigate to 'VSBB Parameters', select 'Power On Behavior', and set it to 'Last Channel'.",
                    "question": "Did you set 'Power On Behavior' to 'Last Channel'?",
                    "failureAction": "Retry setting the Power On Behavior.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/c0263386a22649fc9f89fb2a4f3c00c4005952e0bd9711ef89563f390a4003ad.png",
                    "nextStepOnFailure": 9,
                    "resolvesIssue": false,
                    "successMessage": "Power On Behavior configured. Return to the main setup menu."
                  },
                  {
                    "step": 10,
                    "instruction": "Reboot the Visium Set Top Box",
                    "details": "In the main setup menu, select 'Reboot'. Allow the Visium box to restart fully.",
                    "question": "Did the Visium reboot successfully?",
                    "failureAction": "Manually power cycle the Visium box.",
                    "image": "https://clnproduction.s3.amazonaws.com/photoAlbums/Tes/01bed2f1766945a2a40446ab8f1fd9d5f1b01400bd9511ef8fe1574b898f7cdb.png",
                    "nextStepOnFailure": 10,
                    "resolvesIssue": false,
                    "successMessage": "Visium rebooted successfully. Proceed to verify channels."
                  },
                  {
                    "step": 11,
                    "instruction": "Verify channels after reboot",
                    "details": "Check that all expected channels are available after the reboot.",
                    "question": "Are all channels displaying correctly?",
                    "failureAction": "Rerun the QAM scan if channels are missing.",
                    "image": "",
                    "nextStepOnFailure": 8,
                    "resolvesIssue": true,
                    "successMessage": "Channels are verified. Setup is almost complete. Update the case"
                  },
            ]
          },

    ]
}