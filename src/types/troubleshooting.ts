export interface TroubleshootingStep {
  step: number;
  instruction: string;
  details: string;
  question: string;
  failureAction: string;
  image?: string;
  nextStepOnFailure?: number; // goes to next step if troubleshooting step doesnt work
  resolvesIssue?: boolean; // Add this to mark steps that resolve the issue
}


  export interface CommonIssue {
    title: string;
    symptoms: string[];
    quickSolution: string;
    troubleshootingSteps: TroubleshootingStep[];
  }
  
  export interface Equipment {
    [key: string]: {
      commonIssues: CommonIssue[];
    };
  }
  
  export interface SystemData {
    [key: string]: Equipment;
  }

  export interface CommonIssue {
    title: string;
    symptoms: string[];
    quickSolution: string;
    troubleshootingSteps: TroubleshootingStep[];
  }
  