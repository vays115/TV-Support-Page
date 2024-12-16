import { Equipment } from '@/types/troubleshooting';

export const general: Equipment = {
    commonIssues: [
      {
        title: "Basic Questions for SF",
        symptoms: [
          "1. What issue/s are currently going on?",
          "2. Do they have any TV service currently in the facility?",
          "3. Is the problem throughout the whole facility, one wing, one area, one room?",
          "4. Do they have TV working at the Headend/Equipment?",
          "5. Are you missing all your channels or just some? If only some, which ones?",
          "6. Do you see anything at all on the screen?",
          "7. Has there been any work done on the roof recently?",
          "8. Do they see lights on the equipment / Do they have Power to the Equipment?",
          "9. What's the weather look like outside? Is it heavy rain or snow? (Rain Fade or Snow/Ice on Dish can affect signal).",
          "10. Whats the remote access computer name from LogMeIN",
        ],
        quickSolution: "Post the above questions in the SF case description",
        troubleshootingSteps: [
        ]
      },
    ]
  };