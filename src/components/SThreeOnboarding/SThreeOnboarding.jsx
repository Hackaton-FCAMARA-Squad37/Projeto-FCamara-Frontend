import { Box, Typography, useMediaQuery } from "@mui/material"
import logoUXUI from '../../assets/uxuiLogo.png'
import logoQA from '../../assets/qaLogo.png'
import logoDEV from '../../assets/devLogo.png'

export const SThreeOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box bgcolor='coffee.main' color='water.main' textAlign='center' sx={{
            padding:'0 1.5rem 0 1.5rem'
        }}>
            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} mb={mobile? '2rem':'4rem'}>
                Você pode escolher qualquer uma das áreas disponíveis para estudar
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection: `${mobile?'column':'row'}`,
                justifyContent:'space-between',
                padding:`0 1.5rem ${mobile?'3rem':'4rem'} 1.5rem`
            }}>
                <Box
                sx={
                {
                    backgroundImage: `url(${logoUXUI})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: `${mobile?'21.375rem':'22.688rem'}`,
                    height: `${mobile?'17.5rem':'22rem'}`,
                    borderRadius: '8px',
                    marginRight:`${mobile?'auto':'1.5rem'}`,
                    marginBottom: `${mobile?'1rem':''}`,
                    marginLeft:`${mobile?'auto':'0'}`,
                    alignContent:'center'
                }}/>
                <Box
                sx={
                {
                    backgroundImage: `url(${logoQA})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: `${mobile?'21.375rem':'22.688rem'}`,
                    height: `${mobile?'17.5rem':'22rem'}`,
                    borderRadius: '8px',
                    marginRight:`${mobile?'auto':'1.5rem'}`,
                    marginBottom: `${mobile?'1rem':''}`,
                    marginLeft:`${mobile?'auto':'0'}`
                }}/>
                <Box
                sx={
                {
                    backgroundImage: `url(${logoDEV})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: `${mobile?'21.375rem':'22.688rem'}`,
                    height: `${mobile?'17.5rem':'22rem'}`,
                    borderRadius: '8px',
                    margin:`${mobile?'auto':''}`
                }}/>
            </Box>
        </Box>
    )
}