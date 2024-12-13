interface SidebarItemProps {
    title: string;
    isSelected?: boolean;
    onClick: () => void;
    className?: string;
  }
  
const SidebarItem: React.FC<SidebarItemProps> = ({ 
    title, 
    isSelected, 
    onClick, 
    className = '' 
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left p-2 rounded text-sm ${
        isSelected ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
      } ${className}`}
    >
      {title}
    </button>
  );
  
  export default SidebarItem;