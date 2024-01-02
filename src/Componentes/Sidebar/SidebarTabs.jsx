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
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.3,
            mx: 2,
            borderRadius: 2,
            mt: 1,
          }}
          {...a11yProps(0)}
        />
        <Tab
          label="درباره من"
          icon={<AccountCircleRounded />}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.3,
            mx: 2,
            borderRadius: 2,
          }}
          {...a11yProps(1)}
        />
        <Tab
          label="رزومه من"
          icon={<DescriptionRounded />}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.3,
            mx: 2,
            borderRadius: 2,
          }}
          {...a11yProps(2)}
        />
        <Tab
          label="نمونه کارها"
          icon={<FolderRounded />}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.3,
            mx: 2,
            borderRadius: 2,
          }}
          {...a11yProps(3)}
        />
        <Tab
          label="نظرات"
          icon={<ThreePRounded />}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.3,
            mx: 2,
            borderRadius: 2,
          }}
          {...a11yProps(4)}
        />
        <Tab
          label="ارتباط با من"
          icon={<CallRounded />}
          iconPosition="start"
          sx={{
            color: "white",
            "&.MuiTab-root": { minHeight: 48 },
            backgroundColor: grey[800],
            my: 0.3,
            mx: 2,
            borderRadius: 2,
          }}
          {...a11yProps(5)}
        />
      </Tabs>
    </>
  );
};

export default SidebarTabs;
