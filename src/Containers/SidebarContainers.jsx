import Grid from "@mui/material/Unstable_Grid2";
const SidebarContainers = ({children})=>{
    return(
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
        {children}
      </Grid>
        </>
    )
}

export default SidebarContainers