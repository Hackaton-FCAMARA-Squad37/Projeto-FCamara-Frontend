import {
  Box,
  Typography,
  IconButton,
  SwipeableDrawer,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import { LogoButton } from "../LogoButton/LogoButton";
import { ButtonCreateAccount } from "../ButtonCreateAccount/ButtonCreateAccount";
import useUserState from "../../hook/useUserState";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";

export const MenuBurger = () => {
  //Hook para abrir e fechar a sidebar
  const [isOpen, setIsOpen] = useState(false);

  const login = useUserState();
  const logado = login.id;
  const navigate = useNavigate();

  const logout = useContext(UserContext);

  const urlSobreOrange =
    "https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv";
  const urlComunidade = "https://discord.com/invite/NtESsDFGx5";

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon color="primary" />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <Box
          sx={{ height: "100vh", width: "100vw" }}
          role="presentation"
          color="white"
          bgcolor="coffee.main"
        >
          <Box
            bgcolor="vitamin.main"
            sx={{
              display: "flex",
              height: "4.438rem",
              width: "100vw",
              justifyContent: "space-between",
            }}
          >
            <Button pl="1.5rem" pt="0.25rem">
              <LogoButton onClick={() => setIsOpen(false)} />
            </Button>
            <Box
              sx={{
                display: "flex",
                width: "calc()",
              }}
            >
              <Box
                mr="1.625rem"
                mt="0.71rem"
                mb="auto"
                sx={{
                  height: "3.12rem",
                }}
              >
                <IconButton
                  size="large"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <CloseIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box>
              <Link
                to={logado ? "/painel" : "/"}
                style={{ textDecoration: "inherit", color: "inherit" }}
                onClick={() => setIsOpen(false)}
              >
                <Typography
                  fontWeight="600"
                  mt="5.188rem"
                  ml={3}
                  mr={3}
                  align="justify"
                >
                  {logado ? "Painel" : "In??cio"}
                </Typography>
              </Link>

              <HashLink
                smooth
                to={logado ? "/areas" : "/#section-trilhas"}
                style={{ textDecoration: "inherit", color: "inherit" }}
                onClick={() => setIsOpen(false)}
              >
                <Typography
                  fontWeight="600"
                  mt={3}
                  ml={3}
                  mr={3}
                  align="justify"
                >
                  Trilhas
                </Typography>
              </HashLink>

              <a
                target="_blank"
                href={logado ? urlComunidade : urlSobreOrange}
                style={{ textDecoration: "inherit", color: "inherit" }}
                onClick={() => setIsOpen(false)}
              >
                <Typography
                  fontWeight="600"
                  mt={3}
                  mb={logado ? "" : "83px"}
                  ml={3}
                  mr={3}
                  align="justify"
                >
                  {logado ? "Comunidade" : "Sobre a Orange"}
                </Typography>
              </a>
              {login.isAdmin? <></> : <Link
                to={logado ? "/atualizar-usuario" : "/"}
                style={{ textDecoration: "inherit", color: "inherit" }}
                onClick={() => setIsOpen(false)}
                sx={{
                  display: `${logado ? "" : "none"}`,
                }}
              >
                <Typography
                  fontWeight="600"
                  mt={3}
                  ml={3}
                  mr={3}
                  align="justify"
                  sx={{
                    display: `${logado ? "" : "none"}`,
                  }}
                >
                  Editar Perfil
                </Typography>
              </Link>}
              <a target="_blank" href="https://www.fcamara.com.br/canal-transparencia"
                style={{ textDecoration: "inherit", color: "inherit" }}
                onClick={() => setIsOpen(false)}
                sx={{
                  display: `${logado ? "" : "none"}`,
                }}
              >
                <Typography
                  fontWeight="600"
                  mt={3}
                  ml={3}
                  mr={3}
                  mb={4}
                  align="justify"
                  sx={{
                    display: `${logado ? "" : "none"}`,
                  }}
                >
                  Ajuda
                </Typography>
              </a>
            </Box>
            <Divider
              sx={{
                width: "93%",
                margin: "auto",
                bgcolor: "white",
              }}
            />
            {logado ? (
              <Link
                to="/"
                style={{ color: "water.main", textDecoration: "none" }}
              >
                <Box
                  onClick={() => {
                    navigate("/");
                    logout.logout();
                  }}
                  sx={{
                    display: "flex",
                    paddingLeft: "1.438rem",
                    paddingTop: "2.25rem",
                    color: "primary.main",
                    flexDirection: "row",
                    cursor: "pointer",
                  }}
                >
                  <LogoutIcon />
                  <Typography
                    pl="15px"
                    fontWeight="600"
                    align="justify"
                    color="water.main"
                  >
                    Sair da plataforma
                  </Typography>
                </Box>
              </Link>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "1.438rem",
                  paddingTop: "2.25rem",
                }}
              >
                <ButtonLogin onClick={() => setIsOpen(false)} />
                <Box mt="1.75rem" width="fit-content">
                  <ButtonCreateAccount clicado={() => setIsOpen(false)} />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};
