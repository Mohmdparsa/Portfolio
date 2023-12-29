import SidebarDrawer from "../Drawer/SidebarDrawer";
import SidebarContent from "./SidebarContent";
import { useState } from "react";
import DrawerActionButton from "../Drawer/DrawerActionButton";

const Sidebar = ({ value, handleChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
 <DrawerActionButton/>
        <SidebarContent value={value} handleChange={handleChange} />
        <SidebarDrawer value={value} handleChange={handleChange}/>
    </>
  );
};

export default Sidebar;
