interface SidebarProps {
    children: React.ReactNode;
    title: string;
  }
  
const Sidebar: React.FC<SidebarProps> = ({ children, title }) => (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <nav className="p-4">
        {children}
      </nav>
    </div>
  );
  
  export default Sidebar;