interface ProgressBarProps {
    steps: number;
    currentStep: number;
  }
  
  const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => (
    <div className="mt-8 flex items-center space-x-2">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded ${
            index < currentStep
              ? 'bg-green-500'
              : index === currentStep
              ? 'bg-blue-500'
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
  
  export default ProgressBar;