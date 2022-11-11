import { TextField, Typography, useMediaQuery, Box } from "@mui/material"

export const Register = () =>{
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            backgroundColor:'coffee.main',
            display:'flex',
            flexDirection:'column',
            paddingTop:`${mobile?'4rem':'9rem'}`,
            paddingBottom:`${mobile?'4rem':'9rem'}`
        }}>
            <Box sx={{
                color: 'water.main'
            }}>
                <Typography>
                    Olá, faça sua conta. É gratuito
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores repellendus nostrum accusamus velit saepe officia corrupti 
                    eveniet veniam obcaecati ipsum, modi, laborum ullam nemo minus ratione porro ea, a quae?
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor:'vitamin.main',
                color:'water.main',
                height: '59.5rem',
                maxWidth: `${mobile?'21.375rem':'41.875rem'}`,
                width:'100%',
                margin: 'auto',
                padding: `${mobile?'1.5rem 1rem 2.5rem 1rem':'3.5rem'}`,
                borderRadius:'8px',
                borderColor:'milkshake.main',
                border: '1px solid'
            }}>
                <Box sx={{
                    
                }}>
                    <Typography>Seu e-mail*</Typography>
                    <TextField sx={{
                        backgroundColor:'milkshake.main',
                        borderRadius:'4px',
                        width:'100%'
                    }}/>
                </Box>
            </Box>
        </Box>
    )
}