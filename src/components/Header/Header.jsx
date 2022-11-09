import { MenuBurger } from "../MenuBurger/MenuBurger.jsx"
import { Box, useMediaQuery } from "@mui/material"
import { Navbar } from "../Navbar/Navbar.jsx"
import { LogoButton } from "../LogoButton/LogoButton.jsx"
import { ButtonLogin } from "../ButtonLogin/ButtonLogin.jsx"
import { ButtonCreateAccount } from "../ButtonCreateAccount/ButtonCreateAccount.jsx"

export const Header = () => {
    const mobile = useMediaQuery('(max-width:768px)')
    const notebook = useMediaQuery('(max-width:1024px)')

    return (
        <Box
        pr={mobile?'1.5rem':notebook?'1rem':'4.5rem'}
        pl={mobile?'1.5rem':notebook?'1rem':'4.5rem'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'vitamin.main',
          height: `${mobile?'3.5rem':'6rem'}`
        }}
        >
        <Box pt={mobile?'0.25rem':'1rem'} >
          <LogoButton/>
        </Box>

        {mobile? <MenuBurger/> :
        <Box
        sx={{
          display:'flex',
          justifyContent: 'space-between',
          wdith: '100%',
          flexGrow: '1'
        }}
        >
          <Navbar/>
          <Box
          pt='1.25rem'
          pl='3.125rem'
          sx={{
            display:'flex',
            justifyContent: 'space-between',
            flexGrox: '1',
            width: '50%',
            maxWidth: '21.5rem',
            minWidth: '18rem'
          }}
          >
            <Box pt='1rem'>
              <ButtonLogin/>
            </Box>
            <ButtonCreateAccount/>
          </Box>
        </Box>
         }

        </Box>
    )
}