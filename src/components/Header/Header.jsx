import { MenuBurger } from "../MenuBurger/MenuBurger.jsx"
import { Box } from "@mui/material"

export const Header = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
        >
           <h1>Teste</h1>
            <MenuBurger/> 
        </Box>
    )
}