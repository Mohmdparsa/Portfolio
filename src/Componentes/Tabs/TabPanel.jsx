import { Typography , Box } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../Context/Index";
const TabPanel = (props) => {
  const { children, index, ...other } = props;
  const {pageNumber}=useContext(MainContext)

  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
   
      {pageNumber === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
