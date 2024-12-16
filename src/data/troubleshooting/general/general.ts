import { Equipment } from '@/types/troubleshooting';

export const general: Equipment = {
    commonIssues: [
      {
        title: "Basic Questions for SF",
        symptoms: [
          "1. What issue/s are currently going on?",
          "2. Is the problem throughout the whole facility, one wing, one area, one room?",
          "3. Do they have TV working at the Headend/Equipment?",
          "4. Are you missing all your channels or just some? If only some, which ones?",
          "5. Has there been any work done on the roof recently?",
          "6. Do they see lights on the equipment / Do they have Power to the Equipment?",
          "7. What's the weather look like outside? Is it heavy rain or snow? (Rain Fade or Snow/Ice on Dish can affect signal).",
          "8. Whats the remote access computer name from LogMeIN",
          "9. Are you seeing a bouncing DirectTV Logo on the screen",
        ],
        quickSolution: "Post the above questions in the SF case description and answer them as you go through troubleshooting",
        troubleshootingSteps: [
          {
            step: 1,
            instruction: "Identify the issue.",
            details: "Ask What issue/s are currently going on.",
            question: "Has the issue been identified? Example: missing channels, sound issues, billing questions, ec.",
            failureAction: "Ask staff again for further clarification and update question 1",
            image: "",
            resolvesIssue: false
          },
          {
            step: 2,
            instruction: "Where is the issue affecting.",
            details: "Identify where the issue is at. Example: whole facility, one wing, one area",
            question: "",
            failureAction: "Ask staff again for further clarification and update question 1",
            image: "",
            resolvesIssue: false
          },
        ]
      },
    ]
  };