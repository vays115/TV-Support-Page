interface StepIndicatorProps {
    step: number;
  }
  
const StepIndicator: React.FC<StepIndicatorProps> = ({ step }) => (
    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {step}
    </div>
  );
  

export default StepIndicator;