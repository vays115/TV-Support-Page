import './Sidebar.css';

import Link from 'next/link';

interface SidebarProps {
  children: React.ReactNode;
  title: string;
}

const Sidebar = ({ children, title }: SidebarProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link href="/main">
          <h1 className="cursor-pointer hover:opacity-80 transition-opacity">{title}</h1>
        </Link>
      </div>
      <nav className="sidebar__nav">
        {children}
      </nav>
    </div>
  );
};

export default Sidebar;