import { Typography , Box } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../Context/Index";
const Page = (props) => {
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
        <Box sx={{  height:"100vh" , overflow: "hidden"}}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default Page;
