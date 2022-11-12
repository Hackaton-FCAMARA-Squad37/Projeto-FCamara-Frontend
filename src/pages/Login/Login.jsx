import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useUserState from "../../hook/useUserState";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";

export function Login() {
  const { login, usuario } = useContext(UserContext);
  const mobile = useMediaQuery("(max-width:768px)");
  const cellphone = useMediaQuery("(max-width:480px)");
  const desktop = useMediaQuery("(max-width:1024px)");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    await login(data.get("email"), data.get("password"));

    console.log(await usuario);
  };

  const loginUsuario = useUserState();
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: `${mobile ? "4rem" : "9rem"}`,
        paddingBottom: `${mobile ? "4rem" : "9rem"}`,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Olá, acesse sua conta
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              loginUsuario.logar();
            }}
          >
            Logar
          </Button>
          <Link to="/signin">Cadastre-se</Link>
        </Box>
      </Box>
    </Container>
  );
}
