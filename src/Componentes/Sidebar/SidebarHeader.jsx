import { Typography , Avatar , Hidden , Divider } from "@mui/material"
const SidebarHeader = ()=>{
    return(
        <>
             <Hidden mdDown>
          <Avatar
            src={require("../../Assets/portfolio-image.jpg")}
            sx={{
              height: "150px",
              width: "153px",
              margin: "0 auto",
              mt: "15px",
            }}
          >
            A A
          </Avatar>
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