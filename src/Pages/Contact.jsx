import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Card,
  CardContent,
  Slide,
  InputAdornment,
  CardActions,
  Button,
  Divider,
  Chip,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
  AccountCircle,
} from "@mui/icons-material";

import { Helmet } from "react-helmet-async";
import { position } from "stylis";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
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
          <Divider textAlign="center" sx={{ mb: 3 }}>
            <Chip
              icon={<AccountCircle />}
              color="warning"
              label={
                <Typography variant="body1" color="black" textAlign="center">
                  ارتباط با من
                </Typography>
              }
              sx={{ p: 3 }}
            ></Chip>
          </Divider>

          <Grid container sx={{ mt: 5 }}>
            <Slide
              derection="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid xs={12} sx={12} md={8}>
                <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                  <form autoComplete="off">
                    <CardContent>
                      <Grid container>
                        <Grid xs={12} sx={{ direction: "ltr" }}>
                          <Grid spacing={5}>
                            <Grid xs={12} md={6}>
                              <TextField
                                margin="normal"
                                fullWidth
                                size="small"
                                color="warning"
                                label="نام و نام خانوادگی"
                                name="fullname"
                                variant="outlined"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Face6Rounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>

                            <Grid xs={12} md={6}>
                              <TextField
                                margin="normal"
                                fullWidth
                                size="small"
                                color="warning"
                                label="آدرس ایمیل"
                                name="email"
                                variant="outlined"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailRounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>

                            <Grid xs={12} md={12}>
                              <TextField
                                margin="normal"
                                fullWidth
                                multiline
                                rows={6}
                                size="small"
                                color="warning"
                                label="متن "
                                name="message"
                                variant="outlined"
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions
                      sx={{ alignItems: "end", flexDirection: "column" }}
                    >
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        ارسال کن
                      </Button>
                    </CardActions>
                  </form>
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
                  sx={{ mt: 4, display: { sm: "none", md: "block" , xs:"none"} }}
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
                      xs:"none"
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
