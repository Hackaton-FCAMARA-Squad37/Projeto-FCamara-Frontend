import { Box, Typography, useMediaQuery } from "@mui/material"; 
import { Link } from "react-router-dom";

export const Navbar = () => {
    const desktop = useMediaQuery('(max-width:1024px)')

    return (
        <Box
        pt='2.25rem'
        mr='3rem'
        ml={desktop?'3rem':'8rem'}
        sx={{ 
            display: 'flex',
            width:'100%',
            maxWidth:'24.375rem',
            justifyContent: 'space-between'
        }}>
            <Link style={{ textDecoration:'inherit', color:'inherit', height:'1.5rem' }} >
                <Typography sx={{
                    color: 'water.main'
                }}>Início</Typography>
            </Link>
            <Link style={{ textDecoration:'inherit', color:'inherit', height:'1.5rem' }}>
                <Typography sx={{
                    color: 'water.main'
                }}>Trilhas</Typography>
            </Link>
            <Link style={{ textDecoration:'inherit', color:'inherit', height:'1.5rem' }}>
                <Typography sx={{
                    color: 'water.main'
                }}>Sobre a Orange</Typography>
            </Link>
        </Box>     
    )
}