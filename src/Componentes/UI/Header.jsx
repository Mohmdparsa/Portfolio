import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";
import { cloneElement } from "react";
const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  return (
    <>
      <ElevationScroll>
        <AppBar position="sticky">
          <Toolbar>
            <Button variant="contained" color="secondary">کلیک کنید</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
