import { MenuBurger } from "../MenuBurger/MenuBurger.jsx"
import { Box, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          borderRadius: 1
        }}
        >
            <Typography>Teste</Typography>
            <MenuBurger/> 
        </Box>
    )
}