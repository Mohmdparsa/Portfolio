import { Box } from "@mui/material";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SidebarFooter from "./Sidebar/SidebarFooter";
import SidebarTabs from "./Sidebar/SidebarTabs";
const DrawerContent = ({ value, handleChange }) => {
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };
  return (
    <>
      <Box sx={{ textAlign: "center", justifyContent: "center" }}>
        <SidebarHeader />
        <SidebarTabs />

        <SidebarFooter />
      </Box>
    </>
  );
};

export default DrawerContent;
