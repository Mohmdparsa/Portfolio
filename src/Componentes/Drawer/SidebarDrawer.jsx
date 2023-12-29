import { Drawer } from "@mui/material"
import { useState } from "react";
import SidebarContent from "../Sidebar/SidebarContent";
const SidebarDrawer = (value , handleChange)=>{
    const [open, setOpen] = useState(false);
    return(
        <>
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
          <SidebarContent value={value} handleChange={handleChange} />
        </Drawer>
        </>
    )
}

export default SidebarDrawer