import { Box, Typography, IconButton, SwipeableDrawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";

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
            <Box sx={{ height:'100vh' }} p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
                <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setIsOpen(false)}>
                    <CloseIcon/>
                </IconButton>
            </Box>
        </SwipeableDrawer>
        </>
        
    )
}