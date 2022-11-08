import { MenuBurger } from "../MenuBurger/MenuBurger.jsx"
import { Box, useMediaQuery } from "@mui/material"
import { Navbar } from "../Navbar/Navbar.jsx"
import { LogoButton } from "../LogoButton/LogoButton.jsx"

export const Header = () => {
    const cellphone = useMediaQuery('(max-width:600px)')

    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'vitamin.main',
          height: `${cellphone?'3rem':'6rem'}`
        }}
        >

        <LogoButton/>
        
        {cellphone? <MenuBurger/> : <Navbar/>}
             
        </Box>
    )
}