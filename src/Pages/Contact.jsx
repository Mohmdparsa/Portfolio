import { useState, useEffect } from "react";
import CustomDivider from "../Componentes/Common/CustomDivider";
import { ContactForm } from "./Index";
import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";

import { Helmet } from "react-helmet-async";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          direction: "rtl",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>

        <CardContent>
          <CustomDivider
            bColor="warning.main"
            cColor="warning"
            icon={<AccountCircle />}
            align="center"
            text="ارتباط با من"
          />
          <Grid container sx={{ mt: 5 }}>
            <Slide
              derection="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid xs={12} sx={12} md={8}>
                <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                  <ContactForm />
                </Card>
              </Grid>
            </Slide>

            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid xs={0} sm={0} md={4} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    mt: 4,
                    display: { sm: "none", md: "block", xs: "none" },
                  }}
                >
                  بیا در مورد همه چیز باهم صحبت کنیم
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{
                    mt: 2,
                    display: {
                      sm: "none",
                      md: "block",
                      xs: "none",
                    },
                  }}
                >
                  <a
                    href="mailto:mohmd.pars4@gmail.com"
                    alt="email"
                    style={{ color: "tomato", textDecoration: "none" }}
                  >
                    ایمیل
                    <br />
                  </a>
                  بزن به من
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Contact;
