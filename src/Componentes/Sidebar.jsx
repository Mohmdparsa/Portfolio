import {
  Typography,
  Box,
  Divider,
  Avatar,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
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
const Sidebar = ({value , handleChange}) => {
  const a11yProps = (index)=> {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
  return (
    <>
      <Grid
        xs={0}
        sm={0}
        md={3}
        lg={3}
        xl={3}
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "center", justifyContent: "center" }}>
          <Hidden mdDown>
            <Avatar
              src={require("../Assets/portfolio-image.jpg")}
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
          <Typography variant="h4" sx={{ mt: "15px"}}>
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
                sx={{ alignItems: "middle", color: "tomato", ml: "7px"}}
              />
            </Typography>
            <Typography variant="subtitle1">
              کپی رایت 2023
              <CopyrightRounded sx={{ alignItems: "middle", ml: "7px" }} />
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Sidebar;
