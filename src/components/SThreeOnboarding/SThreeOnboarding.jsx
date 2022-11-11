import { Box, Typography, useMediaQuery } from "@mui/material";
import logoUXUI from "../../assets/logoUXUI.png";
import logoQA from "../../assets/logoQA.png";
import logoDEV from "../../assets/logoDEV.png";
import { CardArea } from "../CardArea/CardArea";

export const SThreeOnboarding = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const desktopWide = useMediaQuery('(max-width:1200px)')

  return (
    <Box
      bgcolor="coffee.main"
      color="water.main"
      textAlign="justify"
      sx={{
        padding: `0 ${mobile ? "1.5rem" : "4.5rem"} 0 ${
          mobile ? "1.5rem" : "4.5rem"
        }`,
      }}
    >
      <Typography
        fontWeight="600"
        fontSize={mobile ? "1rem" : "1.5rem"}
        mb={mobile ? "2rem" : "4rem"}
      >
        Você pode escolher qualquer uma das áreas disponíveis para estudar
      </Typography>
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
