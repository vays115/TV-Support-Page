import React from 'react';
import Alert from '@/components/ui/Alert/Alert';
import Button from '@/components/ui/Button/Button';

interface ResolvedAlertProps {
  onBackToIssues: () => void;
}

const ResolvedAlert: React.FC<ResolvedAlertProps> = ({ onBackToIssues }) => (
  <Alert variant="success" className="step-alert">
    <div className="step-alert__content">
      <h4 className="step-alert__title">Issue Resolved!</h4>
      <p className="step-alert__text">
        The issue has been successfully resolved. You can return to the common issues list or select another issue to troubleshoot.
      </p>
      <div className="step-alert__actions">
        <Button variant="outline" onClick={onBackToIssues}>
          Back to Issues
        </Button>
      </div>
    </div>
  </Alert>
);

export default ResolvedAlert;
