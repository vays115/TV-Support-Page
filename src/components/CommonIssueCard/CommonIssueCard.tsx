import React from 'react';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import { CommonIssue } from '@/types/troubleshooting';

interface CommonIssueCardProps {
  issue: CommonIssue;
  onViewSteps: () => void;
}

const CommonIssueCard: React.FC<CommonIssueCardProps> = ({ issue, onViewSteps }) => (
  <Card className="common-issue-card">
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
      onClick={onViewSteps}
      variant="outline"
      className="common-issue-card__button"
    >
      View Detailed Steps
    </Button>
  </Card>
);

export default CommonIssueCard;
