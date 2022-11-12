import { Button, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"


export const ButtonCreateAccount = (props) => {
    const mobile = useMediaQuery('(max-width:768px)')
    
    return (
        <Link to='/signin'>
            <Button
                onClick={props.clicado}
                variant="contained"
                sx={{
                height: `${mobile?'3rem':'3.5rem'}`,
                minWidth: '11.438rem',
                color:'vitamin.main',
                borderRadius:'8px',
                marginTop:`${mobile?'0.25rem':''}`
                }}>
                    <Typography
                    color='vitamin.main'
                    fontWeight='600'
                    >
                        Criar conta
                    </Typography>
            </Button>
        </Link>
    )
}
