interface SidebarCategoryProps {
    title: string;
    isSelected?: boolean;
    onClick: () => void;
    children?: React.ReactNode;
  }
  
  const SidebarCategory: React.FC<SidebarCategoryProps> = ({ 
    title, 
    isSelected, 
    onClick, 
    children 
  }) => (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full text-left font-semibold p-2 rounded ${
          isSelected ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
        }`}
      >
        {title}
      </button>
      {isSelected && (
        <div className="ml-4 mt-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  export default SidebarCategory;