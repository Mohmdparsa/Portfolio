import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import "./App.css";

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
        <div className="App">
          <Button variant="contained">hello</Button>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
