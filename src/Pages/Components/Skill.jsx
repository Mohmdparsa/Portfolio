import {
  Divider,
  Chip,
  Box,
  Typography,
  LinearProgress,
  Badge,
} from "@mui/material";
const Skill = ({ icon, value, name }) => {
  return (
    <>
      <Divider textAlign="right" sx={{ marginTop: "20px" }}>
        <Chip
          label={name}
          sx={{ width: "140px" }}
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
        ></Chip>
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: "35" , mr:2 }}>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <Badge variant="standard" color="secondary" badgeContent={`${value}%`} />
          </Typography>
        </Box>

        <Box sx={{ width: "90%", mr: 4, mt: 3 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{ height: 10, borderRadius: "10px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
