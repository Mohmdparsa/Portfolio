import { Box } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarTabs from "./SidebarTabs";
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
