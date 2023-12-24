import Grid from "@mui/material/Unstable_Grid2";
import DrawerContent from "./UI/DrawerContent";
import { useState } from "react";
import { Drawer, Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import { MenuRounded } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const Sidebar = ({ value, handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    return setOpen(!open);
  };

  return (
    <>
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
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <Fab
            aria-label="Sidebar"
            size="small"
            sx={{ m: 2, color: red[500] }}
            onClick={handleDrawerToggle}
          >
            <MenuRounded />
          </Fab>
        </Box>
        <DrawerContent value={value} handleChange={handleChange} />
        <Drawer
          open={open}
          variant="temporary"
          onClose={() => setOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 300,
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          <DrawerContent value={value} handleChange={handleChange} />
        </Drawer>
      </Grid>
    </>
  );
};

export default Sidebar;
