import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from '@mui/material';
const DevInfo = ({children})=>{
    return(
        <>
          <Typography variant="body1" color="secondary.main" textAlign="left" sx={{mt:2}}
              fontSize="26px"
               >
            {children}
                <ArrowBackIosNewRoundedIcon sx={{verticalAlign:"bottom" , color:"primary.main"}}/>

              </Typography>
        
        </>
    )
}

export default DevInfo