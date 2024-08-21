import React from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

interface AppCardProps {
  id: string;
  name: string;
  category: string;
  rating: string;
  icon: string;
}

const AppCard: React.FC<AppCardProps> = ({ id, name, category, rating, icon }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/main.exe"; // Path to your executable file in the public folder
    link.download = "main.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg relative">
      <img src={icon} alt={name} className="w-20 h-20 rounded mb-2" />

      <Link to={`/appDescription/${id}`}>
        <h3 className="text-white font-semibold hover:underline">{name}</h3>
      </Link>

      <p className="text-gray-400 text-sm">{category}</p>

      <div className="flex items-center mt-2">
        <span className="text-yellow-500 mr-1">{rating}</span>
        <span className="text-yellow-500">★</span>
      </div>

      <button
        className="absolute bottom-4 right-4 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleDownload}
      >
        <Download className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AppCard;
