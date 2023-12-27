import {
  HomeRounded,
  AccountCircleRounded,
  DescriptionRounded,
  FolderRounded,
  ThreePRounded,
  CallRounded,
} from "@mui/icons-material";
import {
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { grey} from "@mui/material/colors";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SidebarFooter from "./Sidebar/SidebarFooter";
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
        <SidebarHeader/>
   
       
       <SidebarFooter/>
      </Box>
    </>
  );
};

export default DrawerContent;
