import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from "@mui/material";

export const ButtonLogin = () => {
    return (
        <Link to='/' style={{ textDecoration:'inherit', color:'inherit' }}>
            <Box sx={{display:'flex', marginTop:'3.125rem', marginLeft:''}}>
                <PersonIcon />
                <Typography ml={2} align='justify'>Entrar</Typography>
            </Box>
        </Link>  
    )
}
