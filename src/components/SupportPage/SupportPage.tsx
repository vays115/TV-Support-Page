'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import ButtonGroup from '@/components/ui/ButtonGroup/ButtonGroup';
import Alert from '@/components/ui/Alert/Alert';
import Card from '@/components/ui/Card/Card';
import StepIndicator from '@/components/ui/StepIndicator/StepIndicator';
import ProgressBar from '@/components/ui/ProgressBar/ProgressBar';
import { CheckCircle2, XCircle } from 'lucide-react';
import { TroubleshootingStep } from '@/types/troubleshooting';
import { troubleshootingData } from '@/data/troubleshooting';
import { getEquipmentData } from '@/utils/troubleshooting';
import Image from 'next/image';
import './SupportPage.css';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import SidebarCategory from '@/components/ui/Sidebar/SidebarCategory';
import SidebarItem from '@/components/ui/Sidebar/SidebarItem';
import StepsOverview from '@/components/StepsOverview/StepsOverview';



const SupportPage: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepResults, setStepResults] = useState<boolean[]>([]);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);
  const [showSteps, setShowSteps] = useState(false);
  const [isResolved, setIsResolved] = useState(false);


  const handleSystemSelect = (system: string) => {
    setSelectedSystem(system);
    setSelectedEquipment(null);
    setCurrentStep(0);
    setStepResults([]);
    setSelectedIssue(null);
    setShowSteps(false);
    setIsResolved(false);
  };

  const handleEquipmentSelect = (equipment: string) => {
    setSelectedEquipment(equipment);
    setCurrentStep(0);
    setStepResults([]);
    setSelectedIssue(null);
    setShowSteps(false);
    setIsResolved(false);
  };

  const getCommonIssues = () => {
    const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
    return equipmentData?.commonIssues || [];
  };

  const getCurrentStep = (): TroubleshootingStep | null => {
    const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
    if (!equipmentData || selectedIssue === null || selectedIssue < 0 || selectedIssue >= equipmentData.commonIssues.length) {
        return null;
    }

    const issue = equipmentData.commonIssues[selectedIssue];
    return issue.troubleshootingSteps[currentStep] || null;
};

  const getCurrentIssueTitle = (): string => {
    const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
    if (!equipmentData || selectedIssue === null || selectedIssue < 0 || selectedIssue >= equipmentData.commonIssues.length) {
        return '';
    }

    return equipmentData.commonIssues[selectedIssue]?.title || '';
};

  const handleStepResponse = (isSuccess: boolean) => {
    setStepResults([...stepResults, isSuccess]);
    
    const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
    if (!equipmentData || selectedIssue === null) return;

    const currentStepData = equipmentData.commonIssues[selectedIssue]?.troubleshootingSteps[currentStep];
    if (!currentStepData) return;

    if (isSuccess && currentStepData.resolvesIssue) {
      setIsResolved(true);
      return;
    }

    if (!isSuccess) {
      if (currentStepData.nextStepOnFailure !== undefined) {
        const nextStepIndex = equipmentData.commonIssues[selectedIssue]
          .troubleshootingSteps
          .findIndex(step => step.step === currentStepData.nextStepOnFailure);
        if (nextStepIndex !== -1) {
          setCurrentStep(nextStepIndex);
          return;
        }
      }
      return;
    }

    const totalSteps = equipmentData.commonIssues[selectedIssue]
      .troubleshootingSteps.length;
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetTroubleshooting = () => {
    setCurrentStep(0);
    setStepResults([]);
    setSelectedIssue(null);
    setShowSteps(false);
    setIsResolved(false);
  };

  return (
    <div className="support-page">
      <Sidebar title="Support Guide">
        {Object.entries(troubleshootingData).map(([system, equipment]) => (
          <SidebarCategory
            key={system}
            title={system}
            isSelected={selectedSystem === system}
            onClick={() => handleSystemSelect(system)}
          >
            {Object.keys(equipment).map((item) => (
              <SidebarItem
                key={item}
                title={item}
                isSelected={selectedEquipment === item}
                onClick={() => handleEquipmentSelect(item)}
              />
            ))}
          </SidebarCategory>
        ))}
      </Sidebar>

      <main className="support-page__content">
        {selectedSystem && selectedEquipment ? (
          <div>
            <div className="support-page__header">
              <h2 className="support-page__title">
                {selectedEquipment} Support Guide
              </h2>
              <div className="header-buttons">
                <Button 
                  onClick={() => setShowAllSteps(true)}
                  variant="outline"
                >
                  View All Steps
                </Button>
                <Button 
                  onClick={resetTroubleshooting}
                  variant="outline"
                >
                  Restart
                </Button>
              </div>
            </div>

            {!showSteps ? (
              <div className="common-issues">
                <h3 className="common-issues__title">Common Issues</h3>
                <div className="common-issues__grid">
                  {getCommonIssues().map((issue, index) => (
                    <Card key={index} className="common-issue-card">
                      <h4 className="common-issue-card__title">{issue.title}</h4>
                      <div className="common-issue-card__symptoms">
                        <h5>Symptoms:</h5>
                        <ul>
                          {issue.symptoms.map((symptom, i) => (
                            <li key={i}>{symptom}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="common-issue-card__solution">
                        <h5>Quick Solution:</h5>
                        <p>{issue.quickSolution}</p>
                      </div>
                      <Button
                        onClick={() => {
                          setSelectedIssue(index);
                          setShowSteps(true);
                          setCurrentStep(0);
                          setStepResults([]);
                        }}
                        variant="outline"
                        className="common-issue-card__button"
                      >
                        View Detailed Steps
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {getCurrentStep() && (
                  <div>
                    <div className="step-header">
                      <div className="step-header__title-section">
                        <h3 className="step-header__issue-title">
                          {getCurrentIssueTitle()}
                        </h3>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setShowSteps(false);
                            setSelectedIssue(null);
                          }}
                          className="step-header__back-button"
                        >
                          Back to Issues
                        </Button>
                      </div>
                      <Card>
                        <div className="step-content">
                          <div className="step-content__header">
                            <StepIndicator step={getCurrentStep()?.step || 0} />
                            <h4 className="step-content__title">
                              {getCurrentStep()?.instruction}
                            </h4>
                          </div>
                          <div className="step-content__container">
                            <div className="step-content__info">
                              <p className="step-content__details">
                                {getCurrentStep()?.details}
                              </p>
                              <p className="step-content__question">
                                {getCurrentStep()?.question}
                              </p>
                              <ButtonGroup>
                                <Button
                                  onClick={() => handleStepResponse(true)}
                                  variant="success"
                                >
                                  <CheckCircle2 className="icon" />
                                  Yes - Continue
                                </Button>
                                <Button
                                  onClick={() => handleStepResponse(false)}
                                  variant="danger"
                                >
                                  <XCircle className="icon" />
                                  No - Issue Found
                                </Button>
                              </ButtonGroup>
                            </div>

                            {getCurrentStep()?.image && (
                              <div className="step-content__image">
                                <Image 
                                  src={getCurrentStep()?.image || ''}
                                  alt={getCurrentStep()?.instruction || 'Troubleshooting step'}
                                  width={600}
                                  height={400}
                                  className="step-content__image-content"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>

                    {isResolved && (
                      <Alert variant="success" className="step-alert">
                        <div className="step-alert__content">
                          <h4 className="step-alert__title">Issue Resolved!</h4>
                          <p className="step-alert__text">
                            The issue has been successfully resolved. You can return to the common issues list or select another issue to troubleshoot.
                          </p>
                          <div className="step-alert__actions">
                            <Button
                              variant="outline"
                              onClick={() => {
                                setShowSteps(false);
                                setSelectedIssue(null);
                                setIsResolved(false);
                                setCurrentStep(0);
                                setStepResults([]);
                              }}
                            >
                              Back to Issues
                            </Button>
                          </div>
                        </div>
                      </Alert>
                    )}

                    {selectedIssue !== null && (
                      <ProgressBar 
                        steps={getCommonIssues()[selectedIssue]?.troubleshootingSteps || []}
                        currentStep={currentStep}
                        stepResults={stepResults}
                      />
                    )}
                  </div>
                )}
              </div>
            )}

            {showAllSteps && (
              <>
                <div className="modal-backdrop" onClick={() => setShowAllSteps(false)} />
                <StepsOverview
                  steps={selectedIssue !== null 
                    ? getCommonIssues()[selectedIssue]?.troubleshootingSteps || []
                    : []}
                  currentStep={currentStep}
                  onStepSelect={(step) => setCurrentStep(step)}
                  onClose={() => setShowAllSteps(false)}
                />
              </>
            )}
          </div>
        ) : (
          <div className="support-page__empty-state">
            Select a system and equipment type to begin troubleshooting
          </div>
        )}
      </main>
    </div>
  );
};

export default SupportPage;