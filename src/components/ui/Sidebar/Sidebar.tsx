import './Sidebar.css';

interface SidebarProps {
  children: React.ReactNode;
  title: string;
}

const Sidebar = ({ children, title }: SidebarProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>{title}</h1>
      </div>
      <nav className="sidebar__nav">
        {children}
      </nav>
    </div>
  );
};

export default Sidebar;