import { Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"

export const CardDepoimento = (props) => {
    const mobile = useMediaQuery('(max-width: 768px)')

    return (
        <Box sx={{
            display: 'flex'
        }}>
            <Box sx={{
                backgroundImage: `url(${props.imagem})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                minWidth: `${mobile?'2rem':'4.5rem'}`,
                minHeight: `${mobile?'2rem':'4.5rem'}`,
                margin:'auto 0',
                position: 'relative'
            }}/>
            <Box sx={{
                display:'flex',
                flexDirection: 'column',
                border: `0.063rem solid`,
                borderColor:'milkshake.main',
                borderRadius:'0.5rem',
                height: `${mobile? '11.375rem': '14.75rem'}`,
                padding: `${mobile? '1rem': '2rem'}`,
                marginBottom: `${mobile?'1.5rem':'2.5rem'}`,
                marginLeft: `${mobile?'0.75rem':'1.5rem'}`,
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography fontWeight='600' fontSize={mobile?'0.75rem':'1.25rem'}>{props.nome}</Typography>
                    <Typography fontWeight='400' fontSize={mobile?'0.75rem':'1rem'} >{props.cargo}</Typography>
                </Box>
                <Typography fontWeight='400' fontSize={mobile?'0.75rem':'1.25rem'}>{props.depoimento}</Typography>
            </Box>
        </Box>
    )
}