import {
    HomeRounded,
    AccountCircleRounded,
    DescriptionRounded,
    FolderRounded,
    ThreePRounded,
    CallRounded,
    FavoriteRounded,
    CopyrightRounded,
  } from "@mui/icons-material";
  import {
    Typography,
    Box,
    Divider,
    Avatar,
    Hidden,
    Tabs,
    Tab,
  } from "@mui/material";
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
          <Hidden mdDown>
            <Avatar
              src={require("../../Assets/portfolio-image.jpg")}
              sx={{
                height: "150px",
                width: "153px",
                margin: "0 auto",
                mt: "15px",
              }}
            >
              A A
            </Avatar>
          </Hidden>
          <Typography variant="h4" sx={{ mt: "15px" }}>
            امیرعلی آذرمنش
          </Typography>
          <Typography variant="h6">توسعه دهنده فرانت اند</Typography>
          <Divider variant="middle" color="grey" sx={{ mt: "10px" }} />
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            orientation="vertical"
            value={value}
            onChange={handleChange}
          >
            <Tab
              label="صفحه اصلی"
              icon={<HomeRounded />}
              iconPosition="start"
              sx={{ color: "white" }}
              {...a11yProps(0)}
            />
            <Tab
              label="درباره من"
              icon={<AccountCircleRounded />}
              iconPosition="start"
              sx={{ color: "white" }}
              {...a11yProps(1)}
            />
            <Tab
              label="رزومه من"
              icon={<DescriptionRounded />}
              iconPosition="start"
              sx={{ color: "white" }}
              {...a11yProps(2)}
            />
            <Tab
              label="نمونه کارها"
              icon={<FolderRounded />}
              iconPosition="start"
              sx={{ color: "white" }}
              {...a11yProps(3)}
            />
            <Tab
              label="نظرات"
              icon={<ThreePRounded />}
              iconPosition="start"
              sx={{ color: "white" }}
              {...a11yProps(4)}
            />
            <Tab
              label="ارتباط با من"
              icon={<CallRounded />}
              iconPosition="start"
              sx={{ color: "white" }}
              {...a11yProps(5)}
            />
          </Tabs>
          <Divider variant="middle" color="grey" sx={{ mt: "10px" }} />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
              height: "80px",
              mb: "12px",
            }}
          >
            <Typography variant="subtitle1">
              طراحی شده با
              <FavoriteRounded
                sx={{ alignItems: "middle", color: "tomato", ml: "7px" }}
              />
            </Typography>
            <Typography variant="subtitle1">
              کپی رایت 2023
              <CopyrightRounded sx={{ alignItems: "middle", ml: "7px" }} />
            </Typography>
          </Box>
        </Box>
      </>
    );
  };
  
  export default DrawerContent;