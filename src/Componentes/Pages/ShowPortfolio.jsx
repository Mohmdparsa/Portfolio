import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Slide,
  CardActions,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { portfolioInfo } from "../../Constans/MyPortfolioInfo";

const ShowPortfolio = ({ loading }) => {
  return (
    <>
      {portfolioInfo.map((portfolio, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
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
    </>
  );
};

export default ShowPortfolio;
