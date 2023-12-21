import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "../UI/Theme";
import { Typography, Box, Divider, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../Sidebar";

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
          <Sidebar/>
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
