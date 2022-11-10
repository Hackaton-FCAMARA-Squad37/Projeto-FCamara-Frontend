import { Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import grupoFcamara from '../../assets/grupoFcamara.png'
import aluraLogo from '../../assets/logoAlura.png'
import rocketseatLogo from '../../assets/logoRocketseat.png'
import cubosLogo from '../../assets/logoCubos.png'


export const SSixOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box bgcolor='coffee.main' color='water.main' textAlign='justify' sx={{
            padding:`0 ${mobile?'1.5rem':'4.5rem'} ${mobile?'4.875rem':'6.063rem'} ${mobile?'1.5rem':'4.5rem'}`
        }}>
            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} mb={mobile? '1rem':'2rem'}>
                Quem nos apoia
            </Typography>
            <Typography fontWeight='400' fontSize={mobile?'1rem':'1.25rem'} mb={mobile?'2.75rem':'4rem'}>
                Somos parceiros das melhores empresas
            </Typography>
            <Box sx={{
                display:'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                maxWidth:'71.25rem',
                margin: 'auto'
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    paddingBottom: '2.25rem',
                    paddingRight: '6.563rem'
                    
                }}>
                    <a target= '_blank' href="https://www.fcamara.com.br/">
                        <Box sx={{
                            backgroundImage:`url(${grupoFcamara})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'9.729rem':'13.578rem'}`,
                            height: `${mobile?'3.391rem':'4.756rem'}`,
                            margin:'auto',
                            paddingRight: '6.563rem'
                        }}/>
                    </a>
                    <a target= '_blank' href="https://www.alura.com.br/">
                        <Box sx={{
                            backgroundImage:`url(${aluraLogo})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'4.813rem':'8.5rem'}`,
                            height: `${mobile?'3.391rem':'4.756rem'}`,
                            margin:'auto'
                        }}/>
                    </a>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    paddingBottom: '2.25rem',
                    flexWrap:'wrap'
                }}>
                    <a target= '_blank' href="https://www.rocketseat.com.br/">
                        <Box sx={{
                            backgroundImage:`url(${rocketseatLogo})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'11.25rem':'20.313rem'}`,
                            height: `${mobile?'2.125rem':'3.875rem'}`,
                            paddingRight: '6.563rem'
                        }}/>
                    </a>
                    <a target= '_blank' href="https://cubos.academy/">
                        <Box sx={{
                            backgroundImage:`url(${cubosLogo})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'5.125rem':'8.688rem'}`,
                            height: `${mobile?'2.313rem':'3.875rem'}`
                        }}/>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}