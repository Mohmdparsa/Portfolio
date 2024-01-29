import { useState, useEffect } from "react";
import { Divider, Chip, Slide, Typography } from "@mui/material";

const CustomDivider = ({ bColor, cColor, icon, align, text }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Slide
        direction="down"
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
        }}
      >
        <Divider variant="middle" textAlign={align}>
          <Chip
            icon={icon}
            color={cColor}
            label={
              <Typography
                variant="body1"
                color="black"
                sx={{ textAlign: "center" }}
              >
                {text}
              </Typography>
            }
            sx={{ p: 3 }}
          ></Chip>
        </Divider>
      </Slide>
    </>
  );
};

export default CustomDivider;
