import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from "@mui/material";

export const ButtonLogin = () => {
    return (
        <Link to='/'>
            <Box sx={{display:'flex'}}>
                <PersonIcon sx={{ marginTop:'50px', marginLeft:'24px'}}/>
                <Typography mt='50px' ml={3} align='justify'>Entrar</Typography>
            </Box>
        </Link>  
    )
}
