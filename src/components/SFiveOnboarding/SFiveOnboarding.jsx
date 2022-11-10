import { Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { CardDepoimento } from "../CardDepoimento/CardDepoimento"
import fotoAmanda from '../../assets/amanda.png'
import fotoMarcela from '../../assets/marcela.png'
import fotoIgor from '../../assets/igor.png'

export const SFiveOnboarding = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            backgroundColor:'coffee.main',
            color:'water.main',
            padding:`0 ${mobile?'1.5rem':'4.5rem'} 3rem ${mobile?'1.5rem':'4.5rem'}`
        }}>
            <Typography fontWeight='600' fontSize={mobile?'1rem':'1.5rem'} mb={mobile? '2rem':'4rem'}>
                Pessoas que deram uma vitaminada em seus estudos com a gente
            </Typography>
            <CardDepoimento imagem={fotoAmanda} nome='Amanda Letícia' cargo='Estudante de desenvolvimento'
            depoimento='“Estudar no Orange Evolution me ajudou a priorizar os conteúdos que eu precisava. 
            Antes era muito ruim estudar sozinha, são muitos conteúdos disponíveis na internet e eu 
            não sabia por onde começar. A trilha Semear foi essencial.”
            '/>

            <CardDepoimento imagem={fotoMarcela} nome='Marcela Ferreira' cargo='UX/UI Designer'
            depoimento='“Já trabalho como UX Designer a cerca de 4 anos. 
            Sempre que eu queria encontrar um assunto mais avançado, tinha que ir procurando entre todas as listas. 
            Gostei da Orange Evolution porque eu tenho uma trilha específica para o meu nível de conhecimento.”
            '/>

            <CardDepoimento imagem={fotoIgor} nome='Igor Carvalho' cargo='QA Tester'
            depoimento='“Uma das coisas que eu mais gostei na Orange Evolution, 
            é como todos os conteúdos são descritos e com tags, isso me ajuda a 
            saber o que vou encontrar, antes mesmo de acessar o link. 
            Dessa forma, consigo identificar o que eu quero de forma mais rápida.”'/>
        </Box>
    )
}