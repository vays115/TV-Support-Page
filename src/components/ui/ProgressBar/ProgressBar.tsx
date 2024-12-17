import './ProgressBar.css';
import { TroubleshootingStep } from '@/types/troubleshooting';

interface ProgressBarProps {
  steps: TroubleshootingStep[];
  currentStep: number;
}

const ProgressBar = ({ steps, currentStep }: ProgressBarProps) => {
  const getStepStatus = (index: number) => {
    // If this is the current step
    if (index === currentStep) {
      return 'current';
    }
    
    // All steps before current step should be marked as complete
    if (index < currentStep) {
      return 'complete';
    }
    
    // All steps after current are pending
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