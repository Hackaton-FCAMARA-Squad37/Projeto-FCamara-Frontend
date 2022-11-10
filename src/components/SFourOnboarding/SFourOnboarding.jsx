import { Divider, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import foot from '../../assets/pes.png'
import face from '../../assets/face.png'
import oldWoman from '../../assets/oldwoman.png'

export const SFourOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            backgroundColor:'coffee.main',
            color:'water.main',
            padding:`0 ${mobile?'1.5rem':'4.5rem'} 3rem ${mobile?'1.5rem':'4.5rem'}`
        }}>
            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} mb={mobile? '2rem':'4rem'}>
                Para quem o Orange Evolution é feito?
            </Typography>
            <Box sx={{
                    display: 'flex',
                    flexDirection:`${mobile?'column':'row'}`,
                    justifyContent:'space-between'
            }}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: `${mobile?'column-reverse':'column'}`
                    }}>
                        <Box sx={{
                            backgroundImage: `url(${foot})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'1.25rem':'2.5rem'}`,
                            height: `${mobile?'2.5rem':'4rem'}`,
                            mt: '2px'
                        }}/>
                        <Typography fontSize={mobile?'0.75rem':'1.5rem'} fontWeight='600'
                        sx={{marginBottom:`${mobile?'0.75rem':'1.5rem'}`}}>
                            Em transição de carreira
                        </Typography>
                    </Box>
                    <Typography>
                        Nossas trilhas niveladas ajudam a quem quer migrar de 
                        profissão a saber por onde começar, pois há uma ordem a ser estudada
                    </Typography>
                </Box>
                <Divider display={mobile?'inline':'none'} sx={{backgroundColor: 'milkshake.main', marginBottom:'1.5rem', marginTop:'1.5rem'}}/>
                <Box sx={{
                    marginLeft: `${mobile?'0':'5.5rem'}`
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: `${mobile?'column-reverse':'column'}`
                    }}>
                        <Box sx={{
                            backgroundImage: `url(${face})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'1.25rem':'2.5rem'}`,
                            height: `${mobile?'2.5rem':'4rem'}`,
                            mt: '2px'
                        }}/>
                        <Typography fontSize={mobile?'0.75rem':'1.5rem'} fontWeight='600'
                        sx={{marginBottom:`${mobile?'0.75rem':'1.5rem'}`}}>
                            Estudantes, trainees e juniors
                        </Typography>
                    </Box>
                    <Typography>
                        Temos conteúdos para quem 
                        já tem contato com a tecnologia no seu dia a dia, mas ainda precisa 
                        consolidar os conhecimentos
                    </Typography>
                </Box>
                <Divider display={mobile?'inline':'none'} sx={{backgroundColor: 'milkshake.main', marginBottom:'1.5rem', marginTop:'1.5rem'}}/>
                <Box sx={{
                    marginLeft: `${mobile?'0':'5.5rem'}`
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: `${mobile?'column-reverse':'column'}`,
                        
                    }}>
                        <Box sx={{
                            backgroundImage: `url(${oldWoman})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: `${mobile?'1.25rem':'2.5rem'}`,
                            height: `${mobile?'2.5rem':'4rem'}`,
                            mt: '2px'
                        }}/>
                        <Typography fontSize={mobile?'0.75rem':'1.5rem'} fontWeight='600'
                        sx={{marginBottom:`${mobile?'0.75rem':'1.5rem'}`}}>
                            Profissionais pleno e senior
                        </Typography>
                    </Box>
                    <Typography>
                        Nossas trilhas avançadas capacitam os profissionais que 
                        necessitam de conteúdos mais especializados
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}