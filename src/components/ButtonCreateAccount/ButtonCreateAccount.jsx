import { Button, Typography, useMediaQuery } from "@mui/material"


export const ButtonCreateAccount = () => {
    const cellphone = useMediaQuery('(max-width:480px)')
    const desktop = useMediaQuery('(max-width: 1024px)')
    return (
        <Button
            variant="contained"
            sx={{ 
            height: `${desktop?'3rem':'3.5rem'}`,
            maxWidth: `${desktop?'10.188rem':'11.438rem'}`,
            color:'vitamin.main',
            borderRadius:'8px',
            marginTop:`${desktop?'0.25rem':''}`
            }}>
                <Typography 
                color='vitamin.main'
                fontWeight='600'
                >
                    Criar conta
                </Typography>
        </Button>
    )
}
