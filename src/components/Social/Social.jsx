import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import grupoFcamara from '../../assets/grupoFcamara.png'
import facebookLogo from '../../assets/facebookLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
import youtubeLogo from '../../assets/youtubeLogo.png'
import glassdoorLogo from '../../assets/glassdoorLogo.png'

export const Social = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            width:`${mobile?'12.5rem':'17.446rem'}`,
            height:`${mobile?'6.625rem':'9.291rem'}`
        }}>
            <Box>
                <a target= '_blank' href="https://www.fcamara.com.br/">
                    <Box sx={{
                        backgroundImage:`url(${grupoFcamara})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: `${mobile?'9.729rem':'13.578rem'}`,
                        height: `${mobile?'3.391rem':'4.756rem'}`
                    }}/>
                </a>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent: 'space-between',
                alignItems:'center'
            }}>
                <a target='_blank' href="https://www.facebook.com/grupo.fcamara/">
                    <Box sx={{
                        backgroundImage:`url(${facebookLogo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: `${mobile?'1.071rem':'1.496rem'}`,
                        height: `${mobile?'1.767rem':'2.478rem'}`
                    }}/>
                </a>
                <a target='_blank' href="https://www.instagram.com/grupo.fcamara/">
                    <Box sx={{
                        backgroundImage:`url(${instagramLogo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: `${mobile?'1.429rem':'1.994rem'}`,
                        height: `${mobile?'1.426rem':'2rem'}`
                    }}/>
                </a>
                <a target='_blank' href="https://www.linkedin.com/company/grupofcamara/">
                    <Box sx={{
                        backgroundImage:`url(${linkedinLogo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: `${mobile?'1.429rem':'1.994rem'}`,
                        height: `${mobile?'1.351rem':'1.895rem'}`
                    }}/>
                </a>
                <a target='_blank' href="https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw">
                    <Box sx={{
                        backgroundImage:`url(${youtubeLogo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: `${mobile?'1.429rem':'1.994rem'}`,
                        height: `${mobile?'1.044rem':'1.463rem'}`
                    }}/>
                </a>
                <a target='_blank' href="https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm">
                    <Box sx={{
                        backgroundImage:`url(${glassdoorLogo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: `${mobile?'1.429rem':'1.994rem'}`,
                        height: `${mobile?'1.426rem':'2rem'}`
                    }}/>
                </a>
            </Box>
        </Box>
    )
}

