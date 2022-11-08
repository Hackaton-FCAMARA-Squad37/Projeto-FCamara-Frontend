import { Box, Typography, IconButton, SwipeableDrawer } from "@mui/material";
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
                        Side Panel
                    </Typography>
                    <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setIsOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <HashLink smooth to='/#section-trilhas' onClick={() => setIsOpen(false)}>Trilhas</HashLink>
                </Box>
            </Box>
        </SwipeableDrawer>
        </>
        
    )
}