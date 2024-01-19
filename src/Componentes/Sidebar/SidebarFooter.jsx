import { Typography , Box , Divider   } from "@mui/material";
import { FavoriteRounded , CopyrightRounded } from "@mui/icons-material";
import SocialMedia from "./SocialMedia";

const SidebarFooter = () => {
    return (
      <>
       <Divider variant="middle" color="grey" sx={{ mt: "10px" }} /> 
       <SocialMedia/>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            height: "67px",
            mb: "12px",
          }}
        >  
       
          <Typography variant="subtitle1">
            طراحی شده با
            <FavoriteRounded
              sx={{ alignItems: "middle", color: "tomato", ml: "7px" }}
            />
          </Typography>
          <Typography variant="subtitle1">
            کپی رایت 2023
            <CopyrightRounded sx={{ alignItems: "middle", ml: "7px" }} />
          </Typography>
        </Box>
      
      
      </>
    )
  };
  
  export default SidebarFooter;
