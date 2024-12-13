import './SidebarItem.css';

interface SidebarItemProps {
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}

const SidebarItem = ({ title, isSelected, onClick }: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`sidebar-item ${
        isSelected ? 'sidebar-item--selected' : ''
      }`}
    >
      {title}
    </button>
  );
};

export default SidebarItem;