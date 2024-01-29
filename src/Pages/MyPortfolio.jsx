import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  CardActionArea,
  CardMedia,
  Slide,
  CardActions,
  Button,
} from "@mui/material";
import CustomDivider from "../Componentes/Common/CustomDivider";
import Grid from "@mui/material/Unstable_Grid2";
import { portfolioInfo } from "../Constans/MyPortfolioInfo";
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
            {portfolioInfo.map((portfolio, index) => (
              <Grid
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ px: 2, mb: 2 }}
              >
                <Slide
                  direction="up"
                  in={loading}
                  style={{
                    transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                  }}
                >
                  <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
                    {/* new */}
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={portfolio.image}
                        alt={portfolio.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {portfolio.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {portfolio.info}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        href={portfolio.link}
                        size="small"
                        color="primary"
                        target="_blank"
                      >
                        اطلاعات بیشتر
                      </Button>
                    </CardActions>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default MyPortfolio;
