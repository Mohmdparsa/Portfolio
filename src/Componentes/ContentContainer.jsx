import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
const ContentContainer = () => {
    return(
       <Grid
    xs={12}
    sm={12}
    md={9}
    lg={9}
    xl={9}
    sx={{ backgroundColor: "primary.main", textAlign: "center" }}
  >
    <Typography variant="h4">
      محتوای اصلی  
    </Typography>
  </Grid>  
    )

};

export default ContentContainer;
