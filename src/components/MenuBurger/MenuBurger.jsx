import { Box, Typography, IconButton, SwipeableDrawer, Divider, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export const MenuBurger = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
        <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setIsOpen(true)}>
            <MenuIcon />
        </IconButton>
        <SwipeableDrawer 
        anchor='top' 
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}>
            <Box sx={{ height:'100vh', width:'100vw'}} textAlign='center' role='presentation'>
                <Box sx={{ display:'flex', justifyContent:'space-between' }}>
                    <Typography variant='h6' component='div'>
                        Logo
                    </Typography>
                    <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setIsOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Divider></Divider>
                <Box>
                    <Link to='/' 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography>Início</Typography>
                    </Link>


                    <HashLink smooth to='/#section-trilhas' 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography>Trilhas</Typography>
                    </HashLink>


                    <a target="_blank" href="https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv" 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography>Sobre a Orange</Typography>
                    </a>
                </Box>
                <Divider/>
                <Box>
                    <Typography>Entrar</Typography>
                    <Button variant="contained">Criar Conta</Button>
                </Box>
            </Box>
        </SwipeableDrawer>
        </>
        
    )
}