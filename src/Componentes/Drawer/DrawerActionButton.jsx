import Fab from "@mui/material/Fab";
import { MenuRounded } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../Context/Index";
const DrawerActionButton = ()=>{
  const {setDrawerOpen} = useContext(MainContext)
    return(
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
            onClick={()=>{setDrawerOpen(true)}}
          >
            <MenuRounded />
          </Fab>
        </Box>
        </>
    )
}

export default DrawerActionButton