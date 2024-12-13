import './StepIndicator.css';

interface StepIndicatorProps {
  step: number;
  className?: string;
}

const StepIndicator = ({ step, className = '' }: StepIndicatorProps) => {
  return (
    <div className={`step-indicator ${className}`}>
      {step}
    </div>
  );
};

export default StepIndicator;
