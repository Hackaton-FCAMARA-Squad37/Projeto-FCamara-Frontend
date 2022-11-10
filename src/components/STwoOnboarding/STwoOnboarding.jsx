import { Divider, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"

export const STwoOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')
    const cellphone = useMediaQuery('(max-width:480px)')

    return (
        <div id='section-trilhas'>
            <Box bgcolor='coffee.main' color='water.main' textAlign='center' sx={{
                padding:'3rem 1.5rem 3rem 1.5rem'
            }}>
                <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} mb={mobile? '2rem':'4rem'}>
                    Somos uma plataforma de aprendizado contínuo e nivelado
                </Typography>
                <Box>
                <Box />
                    <Box sx={{
                            display:'flex',
                            flexDirection: `${mobile? 'column':'row'}`,
                            justifyContent:'space-between',
                            marginRight: `${mobile? '0':'1.75rem'}`,
                            marginBottom: `${mobile? '2.5rem':'2rem'}`
                    }}>
                        <Box 
                        height={mobile?'3rem':'4rem'}
                        margin='auto'  
                        border='1px solid' 
                        borderColor='milkshake.main' 
                        borderRadius='50%'
                        justifyContent='center'
                        minWidth={mobile?'3rem':'4rem'}
                        mr={mobile?'':'1.75rem'}
                        mb={mobile?'2.5rem':''}

                        sx={mobile?{
                            '&:before': {
                                position: 'absolute',
                                content: '""',
                                height:'2.55rem',
                                bgcolor: 'milkshake.main',
                                marginTop: '3rem',
                                marginLeft: '',
                                width: '2px'
                            }
                        }:{
                            '&:before': {
                                position: 'absolute',
                                content: '""',
                                height:'2px',
                                bgcolor: 'milkshake.main',
                                marginTop: '2.063rem',
                                marginLeft:'2.063rem',
                                width: '1.75rem'
                            },
                            '&:after': {
                                position: 'absolute',
                                content: '""',
                                height:'12.125rem',
                                bgcolor: 'milkshake.main',
                                marginTop:'4px',
                                width: '2px'
                            }
                        }}
                        >
                            <Typography fontSize={mobile?'1.5rem':'2rem'} color='primary' lineHeight={mobile?'2.75rem':'3.75rem'}>
                                1
                            </Typography>
                        </Box>

                        <Box sx={{
                            display:'flex',
                            flexDirection: `${mobile? 'column':'row'}`,
                            border: `0.063rem solid`,
                            borderColor:'milkshake.main',
                            borderRadius:'0.5rem',
                            height: `${mobile? '9rem': '10rem'}`,
                            padding: `${mobile? '1rem': '2rem 3rem'}`,
                            alignItems: 'center',
                            textAlign: `${mobile? 'center':'justify'}`,

                            '&:after': mobile?{
                                position: 'absolute',
                                content: '""',
                                height:'2.6rem',
                                bgcolor: 'milkshake.main',
                                marginTop: '10rem',
                                marginLeft: '1px',
                                width: '2px'
                            }:{}
                        }}>
                            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} pr={mobile?'0':'3rem'} pb={mobile?'1.5rem':''}>
                                Semear
                            </Typography>
                            <Typography fontSize={mobile?'0.75rem':'1.25rem'} width={!cellphone&&mobile?'80%':'100%'}>
                                Semear é o primeiro nível da trilha, 
                                nela você vai aprender assuntos básicos que irão te preparar para os próximos níveis. 
                                Se você está iniciando seus estudos em tecnologia, essa trilha é para você.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                            display:'flex',
                            flexDirection: `${mobile? 'column':'row'}`,
                            justifyContent:'space-between',
                            marginRight: `${mobile? '0':'1.75rem'}`,
                            marginBottom: `${mobile? '2.5rem':'2rem'}`
                    }}>
                        <Box 
                        height={mobile?'3rem':'4rem'}
                        margin='auto'  
                        border='1px solid' 
                        borderColor='milkshake.main' 
                        borderRadius='50%'
                        justifyContent='center'
                        minWidth={mobile?'3rem':'4rem'}
                        mr={mobile?'':'1.75rem'}
                        mb={mobile?'2.5rem':''}

                        sx={mobile?{
                            '&:before': {
                                position: 'absolute',
                                content: '""',
                                height:'2.55rem',
                                bgcolor: 'milkshake.main',
                                marginTop: '3rem',
                                marginLeft: '',
                                width: '2px'
                            }
                        }:{
                            '&:before': {
                                position: 'absolute',
                                content: '""',
                                height:'2px',
                                bgcolor: 'milkshake.main',
                                marginTop: '2.063rem',
                                marginLeft:'2.063rem',
                                width: '1.75rem'
                            },
                            '&:after': {
                                position: 'absolute',
                                content: '""',
                                height:'12.125rem',
                                bgcolor: 'milkshake.main',
                                marginTop:'4px',
                                width: '2px'
                            }
                        }}
                        >
                            <Typography fontSize={mobile?'1.5rem':'2rem'} color='primary' lineHeight={mobile?'2.75rem':'3.75rem'}>
                                2
                            </Typography>
                        </Box>

                        <Box sx={{
                            display:'flex',
                            flexDirection: `${mobile? 'column':'row'}`,
                            border: `0.063rem solid`,
                            borderColor:'milkshake.main',
                            borderRadius:'0.5rem',
                            height: `${mobile? '9rem': '10rem'}`,
                            padding: `${mobile? '1rem': '2rem 3rem'}`,
                            alignItems: 'center',
                            textAlign: `${mobile? 'center':'justify'}`,

                            '&:after': mobile?{
                                position: 'absolute',
                                content: '""',
                                height:'2.6rem',
                                bgcolor: 'milkshake.main',
                                marginTop: '10rem',
                                marginLeft: '1px',
                                width: '2px'
                            }:{}
                        }}>
                            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} pr={mobile?'0':'3rem'} pb={mobile?'1.5rem':''}>
                                Regar
                            </Typography>
                            <Typography fontSize={mobile?'0.75rem':'1.25rem'} width={!cellphone&&mobile?'80%':'100%'}>
                            Regar é o segundo nível da trilha, nela há conteúdos considerados intermediários pela nossa consultroria. 
                            Se você já possui algum tempo estudando tecnologia, essa trilha te ajudará a se aprofundar nos conteúdos.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                            display:'flex',
                            flexDirection: `${mobile? 'column':'row'}`,
                            justifyContent:'space-between',
                            marginRight: `${mobile? '0':'1.75rem'}`,
                            marginBottom: `${mobile? '2.5rem':'2rem'}`


                    }}>
                        <Box 
                        height={mobile?'3rem':'4rem'}
                        margin='auto'  
                        border='1px solid' 
                        borderColor='milkshake.main' 
                        borderRadius='50%'
                        justifyContent='center'
                        minWidth={mobile?'3rem':'4rem'}
                        mr={mobile?'':'1.75rem'}
                        mb={mobile?'2.5rem':''}

                        sx={mobile?{
                            '&:before': {
                                position: 'absolute',
                                content: '""',
                                height:'2.55rem',
                                bgcolor: 'milkshake.main',
                                marginTop: '3rem',
                                marginLeft: '',
                                width: '2px'
                            }
                        }:{
                            '&:before': {
                                position: 'absolute',
                                content: '""',
                                height:'2px',
                                bgcolor: 'milkshake.main',
                                marginTop: '2.063rem',
                                marginLeft:'2.063rem',
                                width: '1.75rem'
                            }
                        }}
                        >
                            <Typography fontSize={mobile?'1.5rem':'2rem'} color='primary' lineHeight={mobile?'2.75rem':'3.75rem'}>
                                3
                            </Typography>
                        </Box>

                        <Box sx={{
                            display:'flex',
                            flexDirection: `${mobile? 'column':'row'}`,
                            border: `0.063rem solid`,
                            borderColor:'milkshake.main',
                            borderRadius:'0.5rem',
                            height: `${mobile? '9rem': '10rem'}`,
                            padding: `${mobile? '1rem': '2rem 3rem'}`,
                            alignItems: 'center',
                            textAlign: `${mobile? 'center':'justify'}`
                        }}>
                            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} pr={mobile?'0':'3rem'} pb={mobile?'1.5rem':''}>
                                Coletar
                            </Typography>
                            <Typography fontSize={mobile?'0.75rem':'1.25rem'} width={!cellphone&&mobile?'80%':'100%'}>
                            Regar é o segundo nível da trilha, nela há conteúdos considerados intermediários pela nossa consultroria. 
                            Se você já possui algum tempo estudando tecnologia, essa trilha te ajudará a se aprofundar nos conteúdos.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
