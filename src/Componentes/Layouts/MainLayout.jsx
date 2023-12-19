import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "../UI/Theme";
import { Grid, Typography, Box, Divider, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";

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
                xs={2}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "white",
                  textAlign: "center",
                }}
              >
                سایدبار
              </Grid>
              <Grid
                xs={10}
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
