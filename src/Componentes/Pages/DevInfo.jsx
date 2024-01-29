import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from '@mui/material';
const Info = ({children})=>{
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

const DevInfo =()=>{
    return(
        <>
          <Info>نام و نام خانوادگی : امیرعلی آذرمنش</Info>
              <Info>سن : 25</Info>
              <Info>شهر : تهران</Info>
        </>
    )
}


export default DevInfo