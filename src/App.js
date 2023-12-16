import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import "./App.css";
import {Helmet , HelmetProvider} from "react-helmet-async"

const theme = createTheme({
  direction: "rtl",
});
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet><title>My Portfolio</title></Helmet>
        <div className="App">
          <Button variant="contained">کلیک کنید</Button>
        </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
