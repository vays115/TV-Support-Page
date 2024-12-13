import './Alert.css';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'success' | 'error';
  className?: string;
}

const Alert = ({ children, variant = 'error', className = '' }: AlertProps) => {
  return (
    <div className={`alert alert--${variant} ${className}`}>
      {children}
    </div>
  );
};

export default Alert;