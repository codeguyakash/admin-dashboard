import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Dashboard from "./Dashboard";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <Header />
      <Box className="mainContent">
        <SideMenu />
        <Box className="contentArea">
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
