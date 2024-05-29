import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Dashboard from "./Dashboard";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
