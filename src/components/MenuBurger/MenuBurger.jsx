import { Box, Typography, IconButton, SwipeableDrawer, Divider, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export const MenuBurger = () => {
    //Hook para abrir e fechar a sidebar
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
                    <IconButton size='large' color='inherit' onClick={() => setIsOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Divider/>
                <Box >
                    <Link to='/' 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography mt='83px' ml={3} mr={3} align='justify'>Início</Typography>
                    </Link>


                    <HashLink smooth to='/#section-trilhas' 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography mt={3} ml={3} mr={3} align='justify'>Trilhas</Typography>
                    </HashLink>


                    <a target="_blank" href="https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv" 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography mt={3} mb='83px' ml={3} mr={3} align='justify'>Sobre a Orange</Typography>
                    </a>
                </Box>
                <Divider/>
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <Box sx={{display:'flex'}}>
                        <PersonIcon sx={{ marginTop:'50px', marginLeft:'24px'}}/>
                        <Typography mt='50px' ml={3} align='justify'>Entrar</Typography>
                    </Box>
                    
                    <Button variant="contained" sx={{ width:'163px', marginTop:'30px', marginLeft:'24px' }}>Criar Conta</Button>
                </Box>
            </Box>
        </SwipeableDrawer>
        </>
    )
}