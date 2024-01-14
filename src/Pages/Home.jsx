import PageImage1 from "../Assets/PageImage1.jpg"
import { Typography , Box } from "@mui/material"
const Home = ()=>{
    return(
        <>
            <Box
                sx={{
                  backgroundImage: `url(${PageImage1})`,
                  height: "100vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "center",
                    color: "primary.main",
                    paddingTop: "20px",
                  }}
                >
                  صفحه اصلی
                </Typography>
              </Box>
        </>
    )

}

export default Home