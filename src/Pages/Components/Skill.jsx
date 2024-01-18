import { Divider, Chip , Box , Typography , LinearProgress } from "@mui/material"
import Html from "../../Assets/Icons/icons8-html.svg"
const Skill = ()=>{
    return(
        <>
        <Divider textAlign="right">
            <Chip icon={<Box component={img} src={Html} label={Html} />}>
            </Chip>
        </Divider>
        
        </>
    )
}

export default Skill