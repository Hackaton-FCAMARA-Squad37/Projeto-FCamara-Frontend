import { Button, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import imagemDNA from '../../assets/dna-onboard.png'
import imagemLogo from '../../assets/logoOrangeJuice.png'

export const SOneOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            background: `black url(${imagemDNA}) center center no-repeat fixed`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw'
        }}>
            <Box sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                paddingTop:`${mobile?'4.375rem':'5rem'}`
            }}>
               <Box sx={{
                    backgroundImage: `url(${imagemLogo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: `${mobile?'11.5rem':'21.5rem'}`,
                    width: `${mobile?'11.5rem':'21.5rem'}`,
                    margin: 'auto'
                }}/>
                <Typography fontWeight='600' fontSize={mobile?'1.5rem':'2rem'} ml='1.25rem' mr='1.25rem' pt='3.5rem'textAlign='center' color='water.main'>
                    Evolua sua carreira na tecnologia
                </Typography>
                <Typography m='auto' maxWidth='57.75rem' pt='2rem' pl='1.25rem' pr='1.25rem'textAlign='center' color='water.main'>
                    Explore conhecimentos que estão transformando indústricas, negócios e vidas através de trilhas gratuitas em Desenvolvimento, UX/UI Design e QA!
                </Typography>
                <Box sx={{
                    width:`${mobile?'10.375rem': '16.063rem'}`,
                    margin:'auto',
                    paddingTop:`3.438rem`,
                    paddingBottom:'5rem'
                }}>
                    <Button variant='outlined' sx={{
                        fontWeight:'600',
                        width: `100%`,
                        height:`${mobile?'3rem':'4.5rem'}`,
                        fontSize:`${mobile?'1rem':'1.5em'}`
                    }}>
                        Quero começar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}