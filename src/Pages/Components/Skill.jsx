import { Divider, Chip , Box , Typography , LinearProgress } from "@mui/material"
import Html from "../../Assets/Icons/icons8-html.svg"
const Skill = ()=>{
    return(
        <>
        <Divider textAlign="right" sx={{marginTop:"20px"}}>
            <Chip label="HTML" sx={{width:"110px"}} icon={<Box component="img" src={Html}  sx={{height:30}}/>}>
            </Chip>
        </Divider>
        <Box sx={{display:"flex", alignItems:"center"}}>
            <Box sx={{minWidth:"35"}}>
                <Typography variant="body2" sx={{mt:2}}>
                    95%
                </Typography>
            </Box>
         
            <Box sx={{width:"90%" , mr:4 , mt:3}}>
   <LinearProgress variant="determinate" value={95} sx={{height:10}}/>
            </Box>
        </Box>
        
        </>
    )
}

export default Skill 