import { Box } from "@mui/material";
import {SidebarTabs , SidebarHeader , SidebarFooter} from "./Index"
const SidebarContent = ({ value, handleChange }) => {

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

export default SidebarContent;
