import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Dashboard, Assignment, People, ExitToApp } from "@mui/icons-material";

const SideMenu = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{ style: { width: 240, top: 64 } }} // Adjust top to start below the AppBar
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;