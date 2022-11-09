import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography, useMediaQuery } from "@mui/material";

export const ButtonLogin = () => {
    const mobile = useMediaQuery('(max-width: 768px)')

    return (
        <Link to='/' style={{ textDecoration:'inherit', color:'inherit' }}>
            <Box sx={{display:'flex', minWidth: '5rem', maxWidth:`${mobile?'4.875rem':''}` , justifyContent:'space-between'}}>
                <PersonIcon color='primary'/>
                <Typography fontWeight='600' align='justify' color='water.main'>Entrar</Typography>
            </Box>
        </Link>  
    )
}
