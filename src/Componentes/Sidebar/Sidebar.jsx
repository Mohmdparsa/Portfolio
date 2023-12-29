import SidebarDrawer from "../Drawer/SidebarDrawer";
import SidebarContent from "./SidebarContent";
import { useState } from "react";
import { Box } from "@mui/material";


const Sidebar = ({ value, handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    return setOpen(!open);
  };

  return (
    <>
 
        <SidebarContent value={value} handleChange={handleChange} />
        <SidebarDrawer value={value} handleChange={handleChange}/>
    </>
  );
};

export default Sidebar;
