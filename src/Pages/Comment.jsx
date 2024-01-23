import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Typography,
  Avatar,
  Card,
  CardContent,
  Divider,
  Chip,
  Slide,
 Box
} from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import {userComments} from "../Constans/Details"
import Slider from "react-slick";
const Comments = ({ helmetTitle, children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  const options = {
    dots:true,
    arrows:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed: 4000,
    pauseOnHover:true,
    cssEase:"linear"
  }
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <Slide
            direction="down"
            in={loading}
            style={{ transitionDelay: loading ? "100ms" : "0ms" }}
          >
            <Divider textAlign="center" sx={{ mb: 3 }}>
              <Chip
                icon={<ForumRounded />}
                color="success"
                label={
                  <Typography variant="body1" color="black" textAlign="center">
                    نظرات
                  </Typography>
                }
                sx={{ p: 3 }}
              ></Chip>
            </Divider>
          </Slide>
          <Box component="div" sx={{mt:10 , justifyContent:"center", alignItems:"center"}}>
            <Slider {...options}>
            {
            userComments.map((user , index)=>(
            <Box key={index} component="div" sx={{justifyContent:"center"}}>
              <Avatar src={user.avatar}
              variant="rounded"
              sx={{height:100 , width:100 , margin:"0 auto" }}
              />
              <Typography variant="body1" textAlign="center" color="black">
                {user.fullname}
              </Typography>
              <Typography variant="body1" textAlign="center" color="black" sx={{mb:2}}>
                {user.jobTitle}
              </Typography>
              <Card sx={{backgroundColor:"lightseagreen" , width:1/2 , m:"0 auto" , borderRadius:5}} >
                <CardContent>
                  <Typography variant="body2" textAlign="center">
                    {user.comment}

                  </Typography>
                </CardContent>
              </Card>
            </Box>
            ))
            }


            </Slider>
           
          </Box>

        </CardContent>
      </Card>
    </>
  );
};
export default Comments;
