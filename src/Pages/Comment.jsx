import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../Componentes/Common/CustomDivider";
import { Typography, Avatar, Card, CardContent, Box } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { userComments } from "../Constans/Details";
const Comments = ({ helmetTitle, children }) => {
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
          display: "flex",
          flexDirection: "column",
          direction:"rtl"
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="success.main"
            cColor="success"
            icon={<ForumRounded />}
            align="center"
            text="نظرات"
          />
          <Box
            component="div"
            sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
          >
            {userComments.map((user, index) => (
              <Box
                key={index}
                component="div"
                sx={{ justifyContent: "center" }}
              >
                <Avatar
                  src={user.avatar}
                  variant="rounded"
                  sx={{ height: 100, width: 100, margin: "0 auto" }}
                />
                <Typography variant="body1" textAlign="center" color="black">
                  {user.fullname}
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="black"
                  sx={{ mb: 2 }}
                >
                  {user.jobTitle}
                </Typography>
                <Card
                  sx={{
                    backgroundColor: "lightseagreen",
                    width: 1 / 2,
                    m: "0 auto",
                    borderRadius: 5,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" textAlign="center">
                      {user.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default Comments;
