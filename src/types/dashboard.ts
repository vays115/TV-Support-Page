export interface Alert {
    id: string;
    message: string;
    priority: 'high' | 'medium' | 'low';
  }