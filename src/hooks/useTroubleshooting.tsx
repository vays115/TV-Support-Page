import { useCallback } from 'react';
import { TroubleshootingStep, CommonIssue, Equipment, SystemData } from '@/types/troubleshooting';
import { troubleshootingData } from '@/data/troubleshooting';

function getEquipmentData(
    data: SystemData,
    selectedSystem: string | null,
    selectedEquipment: string | null
): Equipment | null | undefined {
    if (!selectedSystem || !selectedEquipment || !data[selectedSystem] || !data[selectedSystem][selectedEquipment]) {
        return undefined;
    }
    return data[selectedSystem][selectedEquipment];
}

export const useTroubleshooting = (
    selectedSystem: string | null,
    selectedEquipment: string | null,
    selectedIssue: number | null,
    currentStep: number
) => {
    const getCommonIssues = useCallback((): CommonIssue[] => {
        const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
        return equipmentData?.commonIssues || [];
    }, [selectedSystem, selectedEquipment]);

    const getCurrentStep = useCallback((): TroubleshootingStep | null => {
        const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
        const issues = equipmentData?.commonIssues;
        if (!issues || selectedIssue === null || selectedIssue < 0 || selectedIssue >= issues.length) {
            return null;
        }
        return issues[selectedIssue].troubleshootingSteps[currentStep] || null;
    }, [selectedSystem, selectedEquipment, selectedIssue, currentStep]);

    const getCurrentIssueTitle = useCallback((): string => {
        const equipmentData = getEquipmentData(troubleshootingData, selectedSystem, selectedEquipment);
        const issues = equipmentData?.commonIssues;
        if (!issues || selectedIssue === null || selectedIssue < 0 || selectedIssue >= issues.length) {
            return '';
        }
        return issues[selectedIssue].title || '';
    }, [selectedSystem, selectedEquipment, selectedIssue]);

    return {
        getCommonIssues,
        getCurrentStep,
        getCurrentIssueTitle
    };
};
