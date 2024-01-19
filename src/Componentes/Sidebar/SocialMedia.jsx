import { Box, IconButton } from "@mui/material";
import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
const SocialMedia = () => {
  const Media = [
    {
      icon: <GitHub sx={{ color: "gray" }} />,
      href: "https://Github.com/mohmdparsa",
      id: 0,
    },
    { icon: <Instagram sx={{ color: "gray" }} />, href: "#", id: 1 },
    { icon: <Telegram sx={{ color: "gray" }} />, href: "#", id: 2 },
    { icon: <WhatsApp sx={{ color: "gray" }} />, href: "#", id: 3 },
  ];
  return (
    <>
      <Box component="div">
        {Media.map((media, index) => (
          <IconButton aria-label="Example">
            <a
              key={index}
              href={media.href}
              rel="noopener noreferre"
              target="_blank"
            >
              {media.icon}
            </a>
          </IconButton>
        ))}
      </Box>
    </>
  );
};

export default SocialMedia;
