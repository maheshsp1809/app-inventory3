import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AppBar from "./AppBar";
import AdvancedCarousel from "./AdvanceCarousel";
import AppCard from "./AppCard";

const Homepage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const featuredApps = [
    {
      title: "Qualcomm AR",
      description: "Apps to manage the everyday",
      price: "₹4,899.00",
      buttonText: "See details",
      image: "/image2.png",
    },
    {
      title: "VR Spotlight",
      description: "Featured games for the season",
      price: "",
      buttonText: "See details",
      image: "/image3.png",
    },
    {
      title: "Best AR,VR apps",
      description: "Top apps in Store",
      price: "",
      buttonText: "See details",
      image: "/image2.png",
    },
  ];

  const products = [
    {
      id: "1",
      name: "Xavatar",
      category: "AR",
      rating: "4.2",
      icon: "/xavatar.png",
    },
    {
      id: "2",
      name: "Xaudio",
      category: "AR",
      rating: "3.5",
      icon: "/xaudio.png",
    },
    {
      id: "3",
      name: "Xpresent",
      category: "VR",
      rating: "4.3",
      icon: "/xpresent.png",
    },
    {
      id: "4",
      name: "Xreality",
      category: "AR",
      rating: "4.1",
      icon: "/xreailty.png",
    },
    {
      id: "5",
      name: "Netflix",
      category: "AR",
      rating: "4.4",
      icon: "/pwc.png",
    },
    {
      id: "6",
      name: "Object_Placement",
      category: "VR",
      rating: "4.0",
      icon: "/object_placement.png",
    },
    {
        id: "5",
        name: "Netflix",
        category: "AR",
        rating: "4.4",
        icon: "/pwc.png",
      },
      {
        id: "6",
        name: "Object_Placement",
        category: "VR",
        rating: "4.0",
        icon: "/object_placement.png",
      },
  ];

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-2 md:ml-16">
        <AppBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="mb-2">
          <AdvancedCarousel items={featuredApps} />
        </div>
        <h2 className="text-xl font-bold mb-4">Top Apps</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <AppCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              rating={product.rating}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
