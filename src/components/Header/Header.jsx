import { MenuBurger } from "../MenuBurger/MenuBurger.jsx"
import { Box, useMediaQuery } from "@mui/material"
import imagemLogo from '../../assets/logofcamara.png'
import { Navbar } from "../Navbar/Navbar.jsx"

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
            <Box
            sx={
            {
                backgroundImage: `url(${imagemLogo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: `${cellphone?'2.5rem':'4rem'}`,
                height: `${cellphone?'2.5rem':'4rem'}`,
                mt: '2px'
            }}
            />
            {cellphone? <MenuBurger/> :
            <Navbar/>
            }
             
        </Box>
    )
}