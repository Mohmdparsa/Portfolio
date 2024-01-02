import Grid from "@mui/material/Unstable_Grid2";
const PagesContainer = ({ children }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={9}
      sx={{ backgroundColor: "primary.main", textAlign: "center" }}
    >
      {children}
    </Grid>
  );
};

export default PagesContainer;
