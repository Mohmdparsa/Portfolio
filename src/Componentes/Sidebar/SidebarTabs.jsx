import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { MainContext } from "../../Context/Index";
import { TabsData } from "../../Constans/TabsData";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, drawerOpen, setDrawerOpen } =
    useContext(MainContext);
  const TabData = TabsData();

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
        {TabData.map((tab, index) => (
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
