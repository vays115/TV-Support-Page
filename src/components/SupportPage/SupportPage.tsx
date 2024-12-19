"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import { Equipment, SystemData } from "@/types/troubleshooting";
import { troubleshootingData } from "@/data/troubleshooting";
import "./SupportPage.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import SidebarCategory from "@/components/ui/Sidebar/SidebarCategory";
import SidebarItem from "@/components/ui/Sidebar/SidebarItem";
import StepsOverview from "@/components/StepsOverview/StepsOverview";
import CommonIssuesList from "@/components/CommonIssuesList/CommonIssuesList";
import TroubleshootingStepComponent from "@/components/TroubleshootingStep/TroubleshootingStep";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useTroubleshooting } from "@/hooks/useTroubleshooting";
import Alert from "../ui/Alert/Alert";
import { useRouter } from "next/navigation"; // Changed this line

function getEquipmentData(
  data: SystemData,
  selectedSystem: string | null,
  selectedEquipment: string | null
): Equipment | null | undefined {
  if (
    !selectedSystem ||
    !selectedEquipment ||
    !data[selectedSystem] ||
    !data[selectedSystem][selectedEquipment]
  ) {
    return undefined;
  }
  return data[selectedSystem][selectedEquipment];
}

interface SupportPageProps {
  dashboardContent?: React.ReactNode;
  defaultSystem?: string;
  defaultEquipment?: string
}

const SupportPage: React.FC<SupportPageProps> = ({ 
  dashboardContent, 
  defaultSystem,
  defaultEquipment 
}) => {
  const router = useRouter();
  const [selectedSystem, setSelectedSystem] = useState<string | null>(defaultSystem || null);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(defaultEquipment || null);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [stepResults, setStepResults] = useState<boolean[]>([]);
    const [showAllSteps, setShowAllSteps] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState<number | null>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [isResolved, setIsResolved] = useState(false);
    const [showFailureAction, setShowFailureAction] = useState(false);

    const handleSystemSelect = (system: string) => {
      setSelectedSystem(system);
      setSelectedEquipment(null);
      resetTroubleshooting();
      router.push(`/${encodeURIComponent(system)}`);
    };

    const handleEquipmentSelect = (equipment: string) => {
      setSelectedEquipment(equipment);
      resetTroubleshooting();
      if (selectedSystem) {
        router.push(`/${encodeURIComponent(selectedSystem)}/${encodeURIComponent(equipment)}`);
      }
    };

  const { getCommonIssues, getCurrentStep } = useTroubleshooting(
    selectedSystem,
    selectedEquipment,
    selectedIssue,
    currentStep
  );

  const handleStepResponse = (isSuccess: boolean) => {
    setStepResults([...stepResults, isSuccess]);
    const equipmentData = getEquipmentData(
      troubleshootingData,
      selectedSystem,
      selectedEquipment
    );
    const issues = equipmentData?.commonIssues;
    if (!issues || selectedIssue === null) return;

    const currentStepData =
      issues[selectedIssue]?.troubleshootingSteps[currentStep];
    if (!currentStepData) return;

    if (!isSuccess) {
      setShowFailureAction(true);
      return;
    }

    setShowFailureAction(false);

    if (currentStepData.resolvesIssue) {
      setIsResolved(true);
      return;
    }

    if (currentStep < issues[selectedIssue].troubleshootingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleNextFailureStep = () => {
    const currentStepData = getCurrentStep();
    if (currentStepData?.nextStepOnFailure) {
      setShowFailureAction(false);
      setCurrentStep(currentStepData.nextStepOnFailure - 1);
    }
  };

  const resetTroubleshooting = () => {
    setCurrentStep(0);
    setStepResults([]);
    setSelectedIssue(null);
    setShowSteps(false);
    setIsResolved(false);
    setShowFailureAction(false);
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
            <PageHeader
              title={`${selectedEquipment} Support Guide`}
              onViewAllSteps={() => setShowAllSteps(true)}
              onReset={resetTroubleshooting}
            />

            {!showSteps ? (
              <CommonIssuesList
                issues={getCommonIssues()}
                onSelectIssue={(index) => {
                  setSelectedIssue(index);
                  setShowSteps(true);
                  setCurrentStep(0);
                  setStepResults([]);
                }}
              />
            ) : (
              <div>
                {getCurrentStep() && (
                  <div>
                    <div className="step-header">
                      <TroubleshootingStepComponent
                        step={getCurrentStep()!}
                        onResponse={handleStepResponse}
                      />
                    </div>

                    {isResolved && (
                      <Alert variant="success" className="step-alert">
                        <div className="step-alert__content">
                          <h4 className="step-alert__title">Issue Resolved!</h4>
                          <p className="step-alert__text">
                            {getCurrentStep()?.successMessage ||
                              "The issue has been successfully resolved. You can return to the common issues list or select another issue to troubleshoot."}
                          </p>
                        </div>
                      </Alert>
                    )}

                    {selectedIssue !== null && (
                        <ProgressBar
  steps={getCommonIssues()[selectedIssue]?.troubleshootingSteps || []}
  currentStep={currentStep}
/>
                    )}
                  </div>
                )}
              </div>
            )}

            {showFailureAction && (
              <Alert variant="error" className="step-alert">
                <p className="step-alert__text">
                  Recommended Action: {getCurrentStep()?.failureAction}
                </p>
                <Button
                  onClick={handleNextFailureStep}
                  variant="outline"
                  className="mt-4"
                >
                  Continue to Next Step
                </Button>
              </Alert>
            )}

            {showAllSteps && (
              <>
                <div
                  className="modal-backdrop"
                  onClick={() => setShowAllSteps(false)}
                />
                <StepsOverview
                  steps={
                    selectedIssue !== null
                      ? getCommonIssues()[selectedIssue]
                          ?.troubleshootingSteps || []
                      : []
                  }
                  currentStep={currentStep}
                  onStepSelect={(step) => {
                    setCurrentStep(step);
                    setShowFailureAction(false);
                    }}
                  onClose={() => setShowAllSteps(false)}
                />
              </>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full p-8">
            {dashboardContent}
          </div>
        )}
      </main>
    </div>
  );
};

export default SupportPage;
