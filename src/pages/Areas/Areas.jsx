import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system"
import { CardArea } from "../../components/CardArea/CardArea";
import logoUXUI from '../../assets/logoUXUI.png'
import logoDEV from '../../assets/logoDEV.png'
import logoQA from '../../assets/logoQA.png'

export const Areas = () => {
    const mobile = useMediaQuery("(max-width:768px)");
    const desktopWide = useMediaQuery('(max-width:1200px)')
  
    return (
      <Box
        bgcolor="coffee.main"
        color="water.main"
        textAlign="justify"
        sx={{
          padding: `${mobile?'9rem':'4rem'} ${mobile ? "1.5rem" : "4.5rem"} 0 ${
            mobile ? "1.5rem" : "4.5rem"
          }`,
        }}
      >
        <Box>
            
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: `${desktopWide ? "column" : "row"}`,
            justifyContent: "space-between",
            padding: `0 1.5rem ${mobile ? "3rem" : "4rem"} 1.5rem`
          }}
        >
          <CardArea
            imagem={logoUXUI}
            texto="UX/UI Designer"
            size={desktopWide ? "2.188rem" : "6.563rem"}
          />
  
          <CardArea
            imagem={logoQA}
            texto="QA (Quality Assurance)"
            size={desktopWide ? "1.875rem" : "5.625rem"}
          />
  
          <CardArea
            imagem={logoDEV}
            texto='Desenvolvimento'
            size={desktopWide ? "2.25rem" : "7.5rem"}
          />
        </Box>
      </Box>
    );
  };