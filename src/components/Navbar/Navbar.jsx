import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useUserState from "../../hook/useUserState";

export const Navbar = () => {
  const desktop = useMediaQuery("(max-width:1024px)");
  const login = useUserState();
  const logado = login.id;

  const urlSobreOrange =
    "https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv";
  const urlComunidade = "https://discord.com/invite/NtESsDFGx5";

  return (
    <Box
      pt="2.25rem"
      mr="3rem"
      ml={desktop ? "3rem" : "8rem"}
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "24.375rem",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={logado ? "/painel" : "/"}
        style={{
          textDecoration: "inherit",
          color: "inherit",
          height: "1.5rem",
        }}
      >
        <Typography
          sx={{
            color: "water.main",
            fontWeight: "600",
            '&:hover':{
                textDecoration: 'underline',
                textDecorationColor: 'primary.main',
                textDecorationThickness: '4px'
            }
          }}
        >
          {logado ? "Painel" : "Início"}
        </Typography>
      </Link>
      <HashLink
        smooth
        to={logado ? "/areas" : "/#section-trilhas"}
        style={{
          textDecoration: "inherit",
          color: "inherit",
          height: "1.5rem",
        }}
      >
        <Typography
          sx={{
            color: "water.main",
            fontWeight: "600",
          }}
        >
          Trilhas
        </Typography>
      </HashLink>
      <a
        target="_blank"
        href={logado ? urlComunidade : urlSobreOrange}
        style={{
          textDecoration: "inherit",
          color: "inherit",
          height: "1.5rem",
        }}
      >
        <Typography
          sx={{
            color: "water.main",
            fontWeight: "600",
          }}
        >
          {logado ? "Comunidade" : "Sobre a Orange"}
        </Typography>
      </a>
    </Box>
  );
};
