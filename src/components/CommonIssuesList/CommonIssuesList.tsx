import React from 'react';
import { CommonIssue } from '@/types/troubleshooting';
import CommonIssueCard from '@/components/CommonIssueCard/CommonIssueCard';

interface CommonIssuesListProps {
  issues: CommonIssue[];
  onSelectIssue: (index: number) => void;
}

const CommonIssuesList: React.FC<CommonIssuesListProps> = ({ issues, onSelectIssue }) => (
  <div className="common-issues">
    <h3 className="common-issues__title">Common Issues</h3>
    <div className="common-issues__grid">
      {issues.map((issue, index) => (
        <CommonIssueCard
          key={index}
          issue={issue}
          onViewSteps={() => onSelectIssue(index)}
        />
      ))}
    </div>
  </div>
);

export default CommonIssuesList;