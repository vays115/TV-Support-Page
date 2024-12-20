'use client';

import { useState, useEffect } from 'react';
import { mockAlerts } from '@/data/dashboard/alerts';

const DashboardInfo = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-3xl font-bold text-gray-800">
          {time.toLocaleTimeString()}
        </p>
        <p className="text-gray-500">
          {time.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Tech Alerts</h2>
        {mockAlerts.map(alert => (
          <div 
            key={alert.id} 
            className={`p-4 rounded-lg border ${
              alert.priority === 'high' ? 'bg-red-50 border-red-200' :
              alert.priority === 'medium' ? 'bg-yellow-50 border-yellow-200' :
              'bg-blue-50 border-blue-200'
            }`}
          >
            <p className="text-gray-800">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardInfo;