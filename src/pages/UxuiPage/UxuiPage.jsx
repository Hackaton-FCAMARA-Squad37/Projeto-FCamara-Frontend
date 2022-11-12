import { Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function UxuiPage () {
    const mobile = useMediaQuery('(max-width:768px)')
    const desktopWide = useMediaQuery('(max-width:1200px)')

    return (
        <Box bgcolor="coffee.main"
        color="water.main"
        textAlign="justify"
        sx={{
          padding: `${mobile ? "4rem" : "9rem"} ${
            mobile ? "1.5rem" : "4.5rem"
          } ${mobile ? "4rem" : "9rem"} ${mobile ? "1.5rem" : "4.5rem"}`,
        }}>
          <Box
      onClick={()=>{
        navigate('/painel')
      }}
        sx={{
          display: "flex",
          cursor:'pointer',
          marginBottom: `${mobile?'2rem':'4rem'}`
        }}
      >
        <ArrowBackIcon sx={{
            height:`${mobile?'2.25rem':'2.25rem'}`
        }}/>
        <Typography
          height={mobile ? "" : "1.5rem"}
          sx={{
            fontSize: `${mobile ? "1rem" : "1.5rem"}`,
            paddingLeft:`${mobile?'0.5rem':'1.375rem'}`
          }}
        >
          Voltar
        </Typography>
      </Box>
        </Box>
    )
}