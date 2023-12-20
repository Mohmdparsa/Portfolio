import { Typography, Box, Divider, Avatar , Hidden} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
const Sidebar = () => {
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
          src={require("../../Assets/portfolio-image.jpg")}
            sx={{
              height: "160px",
              width: "163px",
              margin: "0 auto",
              mt: "15px",
            }}
          >A A</Avatar>
          </Hidden>
          <Typography variant="h4" sx={{ mt: "15px" }}>
            امیرعلی آذرمنش
          </Typography>
          <Typography variant="h6">برنامه نویس فرانت اند</Typography>
          <Divider variant="middle" color="grey" sx={{ mt: "10px" }} />
        </Box>
      </Grid>
    </>
  );
};

export default Sidebar;
