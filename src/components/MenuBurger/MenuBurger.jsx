import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";

export const MenuBurger = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setIsOpen(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer 
        anchor='right' 
        open={isOpen}
        onClose={() => setIsOpen(false)}>
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
        </>
        
    )
}