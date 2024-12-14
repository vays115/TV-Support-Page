import React from 'react';
import Button from '@/components/ui/Button/Button';

interface PageHeaderProps {
  title: string;
  onViewAllSteps: () => void;
  onReset: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, onViewAllSteps, onReset }) => (
  <div className="support-page__header">
    <h2 className="support-page__title">{title}</h2>
    <div className="header-buttons">
      <Button onClick={onViewAllSteps} variant="outline">
        View All Steps
      </Button>
      <Button onClick={onReset} variant="outline">
        Restart
      </Button>
    </div>
  </div>
);

export default PageHeader;
