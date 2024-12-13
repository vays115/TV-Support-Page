import './ProgressBar.css';
import { TroubleshootingStep } from '@/types/troubleshooting';

interface ProgressBarProps {
    steps: TroubleshootingStep[];
    currentStep: number;
    stepResults: boolean[];
  }
  
  const ProgressBar = ({ steps, currentStep, stepResults }: ProgressBarProps) => {
    const getStepStatus = (index: number) => {
      if (index === currentStep) return 'current';
      if (index < currentStep) {
        // Check if this step was part of our path
        const wasVisited = stepResults.length > index;
        return wasVisited ? 'complete' : 'skipped';
      }
      return 'pending';
    };
  
    return (
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={step.step}
            className={`progress-bar__step progress-bar__step--${getStepStatus(index)}`}
          />
        ))}
      </div>
    );
  };

export default ProgressBar;