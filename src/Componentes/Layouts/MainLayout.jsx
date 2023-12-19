import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "../UI/Theme";
import { Typography, Box, Divider, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";

const Layout = ({ children }) => {
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>My Portfolio</title>
            </Helmet>
            <Grid container sx={{ height: "100vh" }}>
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
                سایدبار
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={9}
                lg={9}
                xl={9}
                sx={{ backgroundColor: "primary.main", textAlign: "center" }}
              >
                محتوای اصلی
              </Grid>
            </Grid>
            {children}
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default Layout;
