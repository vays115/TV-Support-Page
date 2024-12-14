import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import ButtonGroup from '@/components/ui/ButtonGroup/ButtonGroup';
import Card from '@/components/ui/Card/Card';
import StepIndicator from '@/components/ui/StepIndicator/StepIndicator';
import { CheckCircle2, XCircle } from 'lucide-react';
import { TroubleshootingStep as TroubleshootingStepType } from '@/types/troubleshooting';

interface TroubleshootingStepProps {
  step: TroubleshootingStepType;
  onResponse: (isSuccess: boolean) => void;
}

const TroubleshootingStep: React.FC<TroubleshootingStepProps> = ({ step, onResponse }) => (
  <Card>
    <div className="step-content">
      <div className="step-content__header">
        <StepIndicator step={step.step} />
        <h4 className="step-content__title">{step.instruction}</h4>
      </div>
      <div className="step-content__container">
        <div className="step-content__info">
          <p className="step-content__details">{step.details}</p>
          <p className="step-content__question">{step.question}</p>
          <ButtonGroup>
            <Button onClick={() => onResponse(true)} variant="success">
              <CheckCircle2 className="icon" />
              Yes - Continue
            </Button>
            <Button onClick={() => onResponse(false)} variant="danger">
              <XCircle className="icon" />
              No - Issue Found
            </Button>
          </ButtonGroup>
        </div>
        {step.image && (
          <div className="step-content__image">
            <Image 
              src={step.image}
              alt={step.instruction || 'Troubleshooting step'}
              width={600}
              height={400}
              className="step-content__image-content"
            />
          </div>
        )}
      </div>
    </div>
  </Card>
);

export default TroubleshootingStep;
  