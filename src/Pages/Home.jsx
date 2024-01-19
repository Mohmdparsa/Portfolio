import PageImage1 from "../Assets/PageImage1.jpg";
import { Typography, Box } from "@mui/material";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Links } from "../Constans/Particles";
import { Helmet } from "react-helmet-async";

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
      loop: true,
      showCursor: false,
    });
    return () => {
      typedInfo.destroy();
      typedName.destroy();
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
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
        <Helmet>
          <title>وب سایت امیرعلی آذرمنش | صفحه اصلی</title>
        </Helmet>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={Links}
        />
        <Typography
          ref={nameEl}
          variant="h3"
          color="primary.main"
          sx={{ pt: "170px" }}
        ></Typography>
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
