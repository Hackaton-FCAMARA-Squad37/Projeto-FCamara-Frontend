import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social/Social";

export const Footer = () => {
  const desktop = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      bgcolor="coffee.main"
      color="water.main"
      sx={{
        height: `${desktop ? "53rem" : "35rem"}`,
        borderTop: "1px inset white",
        paddingLeft: `${desktop ? "1.5rem" : "4.5rem"}`,
        paddingRight: `${desktop ? "1.5rem" : "4.5rem"}`,
        paddingTop: `${desktop ? "1.5rem" : "5rem"}`,
        paddingBottom: `${desktop ? "1.5rem" : "5rem"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: `${desktop ? "column" : "row"}`,
        }}
      >
        <Social />
        <Box
          textAlign={desktop ? "center" : "justify"}
          minwidth="9.25rem"
          pr={3}
          pl={3}
          pt={desktop ? "4rem" : "0"}
          pb={desktop ? "3rem" : "0"}
        >
          <Link to="/" style={{ color: "inherit", textAlign: "inherit" }}>
            <Typography sx={{ fontWeight: "600" }}>Início</Typography>
          </Link>
          <HashLink
            smooth
            to="/#section-trilhas"
            style={{ color: "inherit", textAlign: "inherit" }}
          >
            <Typography mt={3} sx={{ fontWeight: "600" }}>
              Trilhas
            </Typography>
          </HashLink>
          <a
            target="_blank"
            href="https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv"
            style={{ color: "inherit", textAlign: "inherit" }}
          >
            <Typography mt={3} sx={{ fontWeight: "600" }}>
              Sobre a Orange
            </Typography>
          </a>
        </Box>

        <Box
          height="21.25rem"
          textAlign={desktop ? "center" : "justify"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: "4rem",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "400" }}>Onde Estamos</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "400" }}>São Paulo</Typography>
            <Typography sx={{ fontWeight: "400" }}>MATRIZ</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "400" }}>
              Rua Bela Cintra, 986 - 2º andar
            </Typography>
            <Typography sx={{ fontWeight: "400" }}>
              Consolação, São Paulo - SP
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "400" }}>Santos</Typography>
            <Typography sx={{ fontWeight: "400" }}>FILIAL</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "400" }}>
              Praça dos Expedicionários, 19 Sala 22
            </Typography>
            <Typography sx={{ fontWeight: "400" }}>
              Gonzaga, Santos - SP
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Divider
          sx={{
            margin: "auto",
            bgcolor: "white",
            display: `${desktop ? "" : "none"}`,
          }}
        />
        <Typography
          fontWeight="400"
          fontSize="0.75rem"
          sx={{
            maxWidth: "21.375rem",
            marginTop: "1.625rem",
          }}
        >
          &copy; 2022 FCamara Formação e Consultoria. Todos os direitos
          reservados.
        </Typography>
      </Box>
    </Box>
  );
};
