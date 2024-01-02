import { Drawer } from "@mui/material";
import SidebarContent from "../Sidebar/SidebarContent";
import { useContext } from "react";
import {MainContext} from "../../Context/Index";
const SidebarDrawer = () => {
  const { setDrawerOpen, drawerOpen } = useContext(MainContext);

  return (
    <>
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            backgroundColor: "secondary.main",
            color: "white",
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
