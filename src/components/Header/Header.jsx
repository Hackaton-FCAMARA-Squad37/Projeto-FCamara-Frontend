import { MenuBurger } from "../MenuBurger/MenuBurger.jsx"
import { Box, Paper, Typography } from "@mui/material"

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
            <Paper variant='outlined'>
                <img src="../../assets/logoFcamara.png" alt="Logo Orange Evolution" />
            </Paper>
            <MenuBurger/> 
        </Box>
    )
}