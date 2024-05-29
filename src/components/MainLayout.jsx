import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Dashboard from "./Dashboard";
import dashboard from "../assets/dashboard.jpg";

const MainLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${dashboard})` }}
    >
      <Header />
      <div className="flex flex-grow">
        <SideMenu />
        <div className="flex-grow">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
