import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  AccountCircleRounded,
  DescriptionRounded,
  FolderRounded,
  ThreePRounded,
  CallRounded,
} from "@mui/icons-material";
import { useContext } from "react";
import { MainContext } from "../../Context/Index";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, drawerOpen, setDrawerOpen } =
    useContext(MainContext);
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...a11yProps(0) },
    { label: "درباره من", icon: <AccountCircleRounded />, ...a11yProps(1) },
    { label: "رزومه من", icon: <DescriptionRounded />, ...a11yProps(2) },
    { label: "نمونه کارها", icon: <FolderRounded />, ...a11yProps(3) },
    { label: "نظرات", icon: <ThreePRounded />, ...a11yProps(4) },
    { label: "ارتباط با من", icon: <CallRounded />, ...a11yProps(5) },
  ];
  return (
    <>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        orientation="vertical"
        value={pageNumber}
        onChange={handlePageNumber}
      >
        {tabs.map((tab , index)=>(
            <Tab
            key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.2,
            mx: 2,
            borderRadius: 2,
            mt: 0.4,
          }}
          {...tab}
        />
        ))}
      
       
      </Tabs>
    </>
  );
};

export default SidebarTabs;
