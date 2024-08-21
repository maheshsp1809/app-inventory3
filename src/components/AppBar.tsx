import React from "react";
import { Menu } from "lucide-react";

interface AppBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppBar: React.FC<AppBarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <button
          className="md:hidden mr-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="text-white" />
        </button>
        <h1 className="text-xl font-bold">App Inventory</h1>
      </div>
      <input
        type="text"
        placeholder="Search AR and VR apps"
        className="bg-gray-800 px-4 py-1 rounded-full w-1/4 hidden md:block"
      />
    </header>
  );
};

export default AppBar;
