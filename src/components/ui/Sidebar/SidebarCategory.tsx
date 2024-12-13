import './SidebarCategory.css';

interface SidebarCategoryProps {
  title: string;
  isSelected?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

const SidebarCategory = ({ 
  title, 
  isSelected, 
  onClick, 
  children 
}: SidebarCategoryProps) => {
  return (
    <div className="sidebar-category">
      <button
        onClick={onClick}
        className={`sidebar-category__button ${
          isSelected ? 'sidebar-category__button--selected' : ''
        }`}
      >
        {title}
      </button>
      {isSelected && (
        <div className="sidebar-category__content">
          {children}
        </div>
      )}
    </div>
  );
};

export default SidebarCategory;