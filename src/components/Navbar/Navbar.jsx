import { Box, Typography } from "@mui/material"; 
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '24.375rem',
            justifyContent: 'space-between'
        }}>
            <Box
            sx={{ 
                display: 'flex',
                width: '24.375rem',
                justifyContent: 'space-between'
            }}>
                <Link style={{ textDecoration:'inherit', color:'inherit' }} >
                    <Typography sx={{
                        color: 'water.main'
                    }}>Início</Typography>
                </Link>
                <Link style={{ textDecoration:'inherit', color:'inherit' }}>
                    <Typography sx={{
                        color: 'water.main'
                    }}>Trilhas</Typography>
                </Link>
                <Link style={{ textDecoration:'inherit', color:'inherit' }}>
                    <Typography sx={{
                        color: 'water.main'
                    }}>Sobre a Orange</Typography>
                </Link>
            </Box>
        </Box>
    )
}