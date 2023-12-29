
import DrawerContent from "./SidebarContent";
import { useState } from "react";
import { Box } from "@mui/material";
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

    </>
  );
};

export default Sidebar;
