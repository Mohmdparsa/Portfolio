import {
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DevInfo from "./Components/DevInfo";
import Avatar02 from "../Assets/Avatar02.jpg";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const About = () => {
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <Divider textAlign="right">
                <Chip
                  icon={<CodeRoundedIcon />}
                  label={
                    <Typography
                      sx={{
                        textAlign: "center",
                        variant: "body1",
                        color: "black",
                      }}
                    >
                      توسعه دهنده فرانت اند
                    </Typography>
                  }
                  size="small"
                  sx={{ p: 3 }}
                />
              </Divider>
              <DevInfo>نام و نام خانوادگی : امیرعلی آذرمنش</DevInfo>
              <DevInfo>سن : 25</DevInfo>
              <DevInfo>شهر : تهران</DevInfo>
            </Grid>

            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
              <Avatar
                textAlign="left"
                src={Avatar02}
                variant="square"
                sx={{
                  height: "240px",
                  width: "200px",
                  margin: "0 auto",
                  mt: "15px",
                  borderRadius: "15px",
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                }}
              ></Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
