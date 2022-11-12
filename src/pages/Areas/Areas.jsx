import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { CardArea } from "../../components/CardArea/CardArea";
import logoUXUI from "../../assets/logoUXUI.png";
import logoDEV from "../../assets/logoDEV.png";
import logoQA from "../../assets/logoQA.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Areas = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const desktopWide = useMediaQuery("(max-width:1200px)");
  const navigate = useNavigate();

  return (
    <Box
      bgcolor="coffee.main"
      color="water.main"
      textAlign="justify"
      sx={{
        padding: `${mobile ? "9rem" : "4rem"} ${
          mobile ? "1.5rem" : "4.5rem"
        } 0 ${mobile ? "1.5rem" : "4.5rem"}`,
      }}
    >
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
        <ArrowBackIcon />
        <Typography
          height={mobile ? "" : "1.5rem"}
          sx={{
            height: `${mobile ? "1rem" : "1.5rem"}`,
          }}
        >
          Voltar
        </Typography>
      </Box>
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
      pb={mobile?'2rem':'9rem'}
        sx={{
          display: "flex",
          flexDirection: `${desktopWide ? "column" : "row"}`,
          justifyContent: "space-between",
          padding: `0 1.5rem ${mobile ? "3rem" : "4rem"} 1.5rem`,
        }}
      >
        <CardArea
          cursor="pointer"
          clicado={() => {
            navigate("/areaUXUI");
          }}
          imagem={logoUXUI}
          texto="UX/UI Designer"
          size={desktopWide ? "2.188rem" : "6.563rem"}
        />

        <CardArea
          cursor="pointer"
          clicado={() => {
            navigate("/areaQA");
          }}
          imagem={logoQA}
          texto="QA (Quality Assurance)"
          size={desktopWide ? "1.875rem" : "5.625rem"}
        />

        <CardArea
          cursor="pointer"
          clicado={() => {
            navigate("/areaDEV");
          }}
          imagem={logoDEV}
          texto="Desenvolvimento"
          size={desktopWide ? "2.25rem" : "7.5rem"}
        />
      </Box>
    </Box>
  );
};
