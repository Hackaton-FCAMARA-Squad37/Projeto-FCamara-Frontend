import { Button, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import imagemOrganization from '../../assets/organization.png'

export const SSevenOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')
    const desktop = useMediaQuery('(max-width:1024px)')

    return (
        <Box sx={{
            color:'water.main',
            backgroundColor:'vitamin.main',
            padding: `${mobile?'3.313rem 1.5rem 4.063rem 1.5rem':'7.063rem 4.375rem 7.063rem 4.375rem'}`,
            display: 'flex',
            flexDirection: `${mobile?'column':'row-reverse'}`
        }}>
            <Box sx={{
                    backgroundImage: `url(${imagemOrganization})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    minHeight: `${desktop?'9.778rem':'18.313rem'}`,
                    minWidth: `${desktop?'17.25rem':'32.25rem'}`,
                    margin: 'auto',
                    paddingLeft:`${mobile?'':'1rem'}`,
                    paddingBottom: `${mobile?'3.125rem':''}`
                }}/>
            <Box>
                <Typography fontWeight='600' fontSize={mobile?'1.5rem':'2rem'} pb={mobile?'1.5rem':'3rem'} textAlign='center'>
                    Mais de 10.000 mil pessoas já estudaram com a gente
                </Typography>
                <Typography fontWeight='400' fontSize={mobile?'1rem':'1.5rem'} pb={mobile?'4.125rem':'4.875rem'} textAlign='center'>
                    Se prepare para o mercado de trabalho, 
                    selecionando a trilha que mais combina com o 
                    nível do seu conhecimento
                </Typography>
                <Box sx={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Link to='/signin'>
                        <Button variant='outlined' sx={{
                                fontWeight:'600',
                                width: `100%`,
                                height:`${mobile?'3rem':'4.5rem'}`,
                                fontSize:`${mobile?'1rem':'1.5em'}`,
                                width:`${mobile?'10.375rem':'16.063rem'}`,
                                backgroundColor:'vitamin.main',
                                color:'primary.main',
                                border:'1px solid',
                                borderRadius:'8px',
                                '&:hover':{
                                    backgroundColor:'#141111'
                                },
                                '&:active': {
                                    backgroundColor:'#222020'
                                }
                            }}>
                                Quero começar
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}