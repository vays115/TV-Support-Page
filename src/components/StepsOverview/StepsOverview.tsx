// src/components/StepsOverview/StepsOverview.tsx
import Button from '@/components/ui/Button/Button';
import StepIndicator from '@/components/ui/StepIndicator/StepIndicator';
import './StepsOverview.css';
import { TroubleshootingStep } from '@/types/troubleshooting';


interface StepsOverviewProps {
  steps: TroubleshootingStep[];
  currentStep: number;
  onStepSelect: (step: number) => void;
  onClose: () => void;
}

const StepsOverview = ({ steps, currentStep, onStepSelect, onClose }: StepsOverviewProps) => {
  return (
    <div className="steps-overview">
      <div className="steps-overview__header">
        <h3 className="steps-overview__title">All Troubleshooting Steps</h3>
        <Button variant="outline" onClick={onClose}>Close</Button>
      </div>
      <div className="steps-overview__content">
        {steps.map((step, index) => (
          <button
            key={step.step}
            onClick={() => {
              onStepSelect(index);
              onClose();
            }}
            className={`step-item ${currentStep === index ? 'step-item--current' : ''}`}
          >
            <div className="step-item__header">
              <StepIndicator step={step.step} />
              <h4 className="step-item__title">{step.instruction}</h4>
            </div>
            <p className="step-item__details">{step.details}</p>
            {step.nextStepOnFailure && (
              <p className="step-item__branch">
                If no: Continues to Step {step.nextStepOnFailure}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepsOverview;
  