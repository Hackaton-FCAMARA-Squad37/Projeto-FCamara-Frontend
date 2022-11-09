import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from "@mui/material";

export const ButtonLogin = () => {
    return (
        <Link to='/' style={{ textDecoration:'inherit', color:'inherit' }}>
            <Box sx={{display:'flex', minWidth: '5rem', justifyContent:'space-between'}}>
                <PersonIcon color='primary'/>
                <Typography align='justify' color='water.main'>Entrar</Typography>
            </Box>
        </Link>  
    )
}
