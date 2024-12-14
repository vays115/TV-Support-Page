import { Equipment } from '@/types/troubleshooting';

export const miniMods: Equipment = {
    commonIssues: [
      {
        title: "TO DO",
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
        ]
      },
    ]
  };