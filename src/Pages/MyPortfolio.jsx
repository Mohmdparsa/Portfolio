import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ShowPortfolio } from "../Componentes/Pages/Index";
import { Card, CardContent } from "@mui/material";
import CustomDivider from "../Componentes/Common/CustomDivider";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";
const MyPortfolio = ({ helmetTitle, children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          direction: "rtl",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="primary.main"
            cColor="primary"
            icon={<SchoolRounded />}
            align="center"
            text="نمونه کارها"
          />
          <Grid container sx={{ p: 3 }}>
            <ShowPortfolio loading={loading} />
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default MyPortfolio;
