import { Typography  , Hidden , Divider } from "@mui/material"
import portfolioImage from "../../Assets/portfolio-image.jpg"
import CustomAvatar from "../Common/CustomAvatar"
const SidebarHeader = ()=>{
    return(
        <>
        <CustomAvatar
        avatar={portfolioImage}
        size={200}
        fallback="YG"
         
        
        />
             <Hidden mdDown>
       
        </Hidden>
        <Typography variant="h4" sx={{ mt: "15px" }}>
          امیرعلی آذرمنش
        </Typography>
        <Typography variant="h6">توسعه دهنده فرانت اند</Typography>
        <Divider variant="middle" color="grey" sx={{ mt: "10px" }} />
        </>
    )
}

export default SidebarHeader