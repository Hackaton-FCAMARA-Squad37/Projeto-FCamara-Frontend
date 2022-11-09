import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { Social } from "../Social/Social";

export const Footer = () => {
    const cellphone = useMediaQuery('(max-width:480px)')

    return (
        <Box bgcolor='coffee.main' color='water.main' sx={{
            height: '45rem',
            width: '100%'
        }}>
            <Social/>
            <Divider color='white' sx={{}}/>
            <Typography>Teste</Typography>
        </Box>
    )
}