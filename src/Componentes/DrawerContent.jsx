import { Box } from "@mui/material";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SidebarFooter from "./Sidebar/SidebarFooter";
import SidebarTabs from "./Sidebar/SidebarTabs";
const DrawerContent = ({ value, handleChange }) => {

  return (
    <>
      <Box sx={{ textAlign: "center", justifyContent: "center" }}>
        <SidebarHeader />
        <SidebarTabs value={value} handleChange={handleChange}/>

        <SidebarFooter />
      </Box>
    </>
  );
};

export default DrawerContent;
