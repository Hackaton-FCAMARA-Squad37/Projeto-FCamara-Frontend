import { Button, Typography, useMediaQuery } from "@mui/material"


export const ButtonCreateAccount = () => {
    const cellphone = useMediaQuery('(max-width:480px)')

    return (
        <Button
            variant="contained"
            sx={{ 
            height: `${cellphone?'3rem':'3.5rem'}`,
            minWidth: `${cellphone?'10.188rem':'11.438rem'}`,
            color:'vitamin.main',
            borderRadius:'8px' }}>
                <Typography 
                color='vitamin.main'
                fontWeight='600'
                >
                    Criar conta
                </Typography>
        </Button>
    )
}
