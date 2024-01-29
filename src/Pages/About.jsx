import { Card, CardContent, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar02 from "../Assets/Avatar02.jpg";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import { DevInfo, Skills } from "../Componentes/Pages/Index";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../Componentes/Common/CustomDivider";

const About = ({ helmetTitle }) => {
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          direction: "rtl",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <CustomDivider
                bColor="primary.main"
                cColor="primary"
                icon={<CodeRoundedIcon />}
                align="right"
                text="توسعه دهنده فرانت اند"
              />
              <DevInfo />
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
          <Grid container>
            <Grid sx={{ width: 1, mt: 1 }}>
              <CustomDivider
                icon={<PsychologyRoundedIcon />}
                align="center"
                text="مهارت های من"
              />
              <Skills />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
