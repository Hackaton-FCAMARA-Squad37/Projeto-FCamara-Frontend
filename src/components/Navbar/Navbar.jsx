import { Box, Typography, useMediaQuery } from "@mui/material"; 
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <Link to='/' style={{ textDecoration:'inherit', color:'inherit', height:'1.5rem' }} >
                <Typography sx={{
                    color: 'water.main',
                    fontWeight: '600'
                }}>Início</Typography>
            </Link>
            <HashLink smooth to='/#section-trilhas' style={{ textDecoration:'inherit', color:'inherit', height:'1.5rem' }}>
                <Typography sx={{
                    color: 'water.main',
                    fontWeight: '600'
                }}>Trilhas</Typography>
            </HashLink>
            <a target="_blank" href="https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv" style={{ textDecoration:'inherit', color:'inherit', height:'1.5rem' }}>
                <Typography sx={{
                    color: 'water.main',
                    fontWeight: '600'
                }}>Sobre a Orange</Typography>
            </a>
        </Box>     
    )
}