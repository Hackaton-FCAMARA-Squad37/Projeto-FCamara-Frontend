import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { CardArea } from "../../components/CardArea/CardArea";
import logoUXUI from "../../assets/logoUXUI.png";
import logoDEV from "../../assets/logoDEV.png";
import logoQA from "../../assets/logoQA.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export const Areas = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const desktopWide = useMediaQuery("(max-width:1200px)");
  return (
    <Box
      bgcolor="coffee.main"
      color="water.main"
      textAlign="justify"
      sx={{
        padding: `${mobile ? "4rem" : "9rem"} ${
          mobile ? "1.5rem" : "4.5rem"
        } ${mobile ? "4rem" : "9rem"} ${mobile ? "1.5rem" : "4.5rem"}`,
      }}
    >
      <Link to='/painel' style={{
        color:'white',
        textDecoration:'none'
      }}>
        <Box 
          sx={{
            display: "flex",
            cursor:'pointer',
            marginBottom: `${mobile?'2rem':'4rem'}`
          }}
        >
          <ArrowBackIcon sx={{
              height:`${mobile?'1.3rem':'2.25rem'}`
          }}/>
          <Typography
            sx={{
              fontSize: `${mobile ? "1rem" : "1.5rem"}`,
              paddingLeft:`${mobile?'0.5rem':'1.375rem'}`,
              fontWeight:'600',
            }}
          >
            Voltar
          </Typography>
        </Box>
      </Link>
      <Box mb={mobile?'2rem':'4rem'}>
        <Typography fontWeight='600' fontSize={mobile?'1.5rem':'2rem'} sx={{
            marginBottom: `${mobile?'1rem':'2rem'}`
        }}>
            Escolha uma área
        </Typography>
        <Typography>
          Selecione uma área do seu interesse, não se preocupe, você poderá
          escolher outra depois
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: `${desktopWide ? "column" : "row"}`,
          justifyContent: "space-between",
          padding: `0 0 ${mobile ? "3rem" : "4rem"} 0rem`,
        }}
      >
        
          <CardArea
          caminho='/caminhouxui'
            cursor="pointer"
            imagem={logoUXUI}
            texto="UX/UI Designer"
            size={desktopWide ? "2.188rem" : "6.563rem"}
          />

        
          <CardArea
          caminho='/caminhoqa'
            cursor="pointer"
            imagem={logoQA}
            texto="QA (Quality Assurance)"
            size={desktopWide ? "1.875rem" : "5.625rem"}
          />


          <CardArea
          caminho='/caminhodev'
            cursor="pointer"
            imagem={logoDEV}
            texto="Desenvolvimento"
            size={desktopWide ? "2.25rem" : "7.5rem"}
          />
      </Box>
    </Box>
  );
};
