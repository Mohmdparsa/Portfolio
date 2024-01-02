import {
    HomeRounded,
    AccountCircleRounded,
    DescriptionRounded,
    FolderRounded,
    ThreePRounded,
    CallRounded,
  } from "@mui/icons-material";
  
const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

export const TabsData = ()=>{
    const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...a11yProps(0) },
    { label: "درباره من", icon: <AccountCircleRounded />, ...a11yProps(1) },
    { label: "رزومه من", icon: <DescriptionRounded />, ...a11yProps(2) },
    { label: "نمونه کارها", icon: <FolderRounded />, ...a11yProps(3) },
    { label: "نظرات", icon: <ThreePRounded />, ...a11yProps(4) },
    { label: "ارتباط با من", icon: <CallRounded />, ...a11yProps(5) },
  ];
  return tabs
}
