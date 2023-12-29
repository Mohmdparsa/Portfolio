import SidebarDrawer from "../Drawer/SidebarDrawer";
import SidebarContent from "./SidebarContent";
import DrawerActionButton from "../Drawer/DrawerActionButton";

const Sidebar = ({ value, handleChange }) => {


  return (
    <>
 <DrawerActionButton/>
        <SidebarContent value={value} handleChange={handleChange} />
        <SidebarDrawer value={value} handleChange={handleChange}/>
    </>
  );
};

export default Sidebar;
