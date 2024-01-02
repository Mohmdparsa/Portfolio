import { Box } from "@mui/material";
import { SidebarTabs, SidebarHeader, SidebarFooter } from "./Index";
const SidebarContent = () => {
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

export default SidebarContent;
