import PageImage1 from "../Assets/PageImage1.jpg";
import { Typography, Box } from "@mui/material";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const strings = [
    "من یک توسعه دهنده وب هستم",
    "من یک فریلنسر هستم",
    "من یک محتواساز دنیای برنامه نویسی هستم",
  ];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["امیرعلی آذرمنش"],
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 10,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 10,
      loop:true,
      showCursor: false,
    });
    return ()=>{
      typedInfo.destroy();
      typedName.destroy();
    }
  }, []);
  return (
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
        <Typography ref={nameEl} variant="h3" color="primary.main" sx={{pt:"170px"}}></Typography>
        <Typography
          variant="h4"
          ref={infoEl}
          sx={{
            textAlign: "center",
            color: "white",
            paddingTop: "20px",
          }}
        >
          صفحه اصلی
        </Typography>
      </Box>
    </>
  );
};

export default Home;
