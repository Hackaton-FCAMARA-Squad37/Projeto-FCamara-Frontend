import { Box, Typography, IconButton, SwipeableDrawer, Divider} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import { LogoButton } from "../LogoButton/LogoButton";
import { ButtonCreateAccount } from "../ButtonCreateAccount/ButtonCreateAccount";

export const MenuBurger = () => {
    //Hook para abrir e fechar a sidebar
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <>
        <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setIsOpen(true)}>
            <MenuIcon color="primary" />
        </IconButton>
        <SwipeableDrawer 
        anchor='top' 
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}>
            <Box sx={{ height:'100vh', width:'100vw'}} textAlign='center' role='presentation' color='white' bgcolor='coffe.main'>
                <Box bgcolor='vitamin.main' sx={{ display:'flex', justifyContent:'space-between', height:'3.5rem' }}>
                    <Box pl='1.5rem' pt='0.25rem'>
                        <LogoButton onClick={ ()=> setIsOpen(false)}/>
                    </Box>
                    <Box pr='1.625rem' pt='0.25rem'>
                        <IconButton size='large' color='inherit' onClick={() => setIsOpen(false)}>
                            <CloseIcon color='primary'/>
                        </IconButton>
                    </Box>
                </Box>
                <Box >
                    <Link to='/' 
                        style={{ textDecoration:'inherit', color:'inherit' }} 
                        onClick={() => setIsOpen(false)}
                    >
                        <Typography mt='5.188rem' ml={3} mr={3} align='justify'>Início</Typography>
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
                <Divider color='white' sx={{
                    width: '93%',
                    margin: 'auto'
                }}/>
                <Box sx={{ display:'flex', flexDirection:'column', paddingLeft:'1.438rem', paddingTop:'2.25rem' }}>
                    <ButtonLogin/>
                    <Box mt='1.75rem' width='fit-content'>
                        <ButtonCreateAccount/>
                    </Box>
                </Box>
            </Box>
        </SwipeableDrawer>
        </>
    )
}