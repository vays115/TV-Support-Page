export interface TroubleshootingStep {
  step: number;
  instruction: string;
  details: string;
  question: string;
  failureAction: string;
  image?: string;
  nextStepOnFailure?: number;
  resolvesIssue?: boolean;
  successMessage?: string;
}

export interface CommonIssue {
  title: string;
  symptoms: string[];
  quickSolution: string;
  troubleshootingSteps: TroubleshootingStep[];
}

export interface Equipment {
  commonIssues: CommonIssue[];
}
  
export type SystemData = {
  [systemName: string]: {
    [equipmentName: string]: Equipment;
  };
};

  