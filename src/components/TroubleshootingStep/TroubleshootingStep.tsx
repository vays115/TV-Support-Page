import React from 'react';
import { useState } from "react";
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

const TroubleshootingStep: React.FC<TroubleshootingStepProps> = ({ step, onResponse }) => {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
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
            <>
              <div 
                className="step-content__image"
                onClick={() => setShowLightbox(true)}
                style={{ cursor: 'pointer' }}
              >
                <Image 
                  src={step.image}
                  alt={step.instruction || 'Troubleshooting step'}
                  width={400}
                  height={250}
                  className="step-content__image-content"
                />
              </div>
              {showLightbox && (
                <div 
                  className="lightbox"
                  onClick={() => setShowLightbox(false)}
                >
                  <div className="lightbox__content">
                    <Image 
                      src={step.image}
                      alt={step.instruction || 'Troubleshooting step'}
                      width={1200}
                      height={800}
                      className="lightbox__image"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  );
};


export default TroubleshootingStep;
  