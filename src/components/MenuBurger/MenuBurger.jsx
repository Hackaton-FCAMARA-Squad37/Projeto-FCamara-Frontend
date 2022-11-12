import {
  Box,
  Typography,
  IconButton,
  SwipeableDrawer,
  Divider,
  Button,
  FormControl,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import { LogoButton } from "../LogoButton/LogoButton";
import { ButtonCreateAccount } from "../ButtonCreateAccount/ButtonCreateAccount";
import useUserState from "../../hook/useUserState";
import { SearchBar } from "../SearchBar/SearchBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";

export const MenuBurger = () => {
  //Hook para abrir e fechar a sidebar
  const [isOpen, setIsOpen] = useState(false);
  //Hooke para abrir e fechar a barra de pesquisa
  const [isSearching, setIsSearching] = useState(false);

  const login = useUserState();
  const logado = login.id;

    const {logout} = useContext(UserContext)

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
            <Button
              pl="1.5rem"
              pt="0.25rem"
              onClick={() => {
                setIsSearching(true);
              }}
              sx={{ display: `${isSearching ? "none" : ""}` }}
            >
              {logado ? (
                <SearchBar />
              ) : (
                <LogoButton onClick={() => setIsOpen(false)} />
              )}
            </Button>
            <Box
              sx={{
                display: "flex",
                width: `${isSearching ? "100%" : "calc()"}`,
              }}
            >
              {isSearching ? (
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    color="primary.main"
                    pl="1.625rem"
                    pt="1.5rem"
                    onClick={() => {
                      setIsSearching(false);
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <KeyboardBackspaceIcon />
                  </Box>
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <input
                      style={{
                        color: "#F8F8F8",
                        marginLeft: "20px",
                        height: "3rem",
                        outline: "none",
                        backgroundColor: "#161616",
                        marginTop: "auto",
                        marginBottom: "auto",
                        border: "0",
                      }}
                    ></input>
                  </FormControl>
                </Box>
              ) : (
                <></>
              )}
              <Box
                mr="1.625rem"
                mt="0.71rem"
                mb="auto"
                sx={{
                  backgroundColor: `${isSearching ? "coffee.main" : ""}`,
                  height: "3.12rem",
                }}
              >
                <IconButton
                  size="large"
                  onClick={() => {
                    `${isSearching ? setIsSearching(false) : setIsOpen(false)}`;
                  }}
                >
                  <CloseIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          {isSearching ? (
            <Box>Teste</Box>
          ) : (
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
                    {logado ? "Painel" : "Início"}
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
                <Link
                  to={logado ? "/painel" : "/"}
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
                    Perfil
                  </Typography>
                </Link>
                <Link
                  to={logado ? "/painel" : "/"}
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
                </Link>
              </Box>
              <Divider
                sx={{
                  width: "93%",
                  margin: "auto",
                  bgcolor: "white",
                }}
              />
              {logado ? (
                <Link to='/' sx={{color:'water.main'}}>
                  <Box onClick={()=>{
                    logout.logout()
                    
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "1.438rem",
                    paddingTop: "2.25rem",
                    color:'primary.main',
                    flexDirection:'row',
                    cursor:'pointer'
                  }}
                                >
                  <LogoutIcon />
                  <Typography pl='15px' fontWeight='600' align='justify' color='water.main'>
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
          )}
        </Box>
      </SwipeableDrawer>
    </>
  );
};
