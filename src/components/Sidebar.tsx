import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Gamepad, User, Library, HelpCircle } from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 z-30 w-16 bg-gray-900 flex flex-col items-center py-4 space-y-8">
      <Link to="/" className={`${location.pathname === '/' ? 'text-purple-500' : 'text-gray-400'}`}>
        <Home className="ml-4" />
      </Link>
      <Link to="/vrApps" className={`${location.pathname === '/vrApps' ? 'text-purple-500' : 'text-gray-400'}`}>
        <Gamepad className="ml-4" />
      </Link>
      <Link to="/arApps" className={`${location.pathname === '/arApps' ? 'text-purple-500' : 'text-gray-400'}`}>
        <User className="ml-4" />
      </Link>
      <Link to="/library" className={`${location.pathname === '/library' ? 'text-purple-500' : 'text-gray-400'}`}>
        <Library className="ml-4" />
      </Link>
      <Link to="/help" className={`${location.pathname === '/help' ? 'text-purple-500' : 'text-gray-400'}`}>
        <HelpCircle className="ml-4 mt-auto" />
      </Link>
    </div>
  );
};

export default Sidebar;
