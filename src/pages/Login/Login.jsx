import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";
import useUserState from "../../hook/useUserState";
import { Loading } from "../../components/Loading/Loading";

export function Login() {
  const { login, usuario } = useContext(UserContext);
  const loged = useUserState();
  const [carregando, setCarregando] = React.useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitLogin = async (data) => {
    console.log({
      email: data.email,
      password: data.senha,
    });

    setCarregando(true)
    await login(data.get("email"), data.get("password")), navigate('/painel')
    ;
  };

  return carregando? (<Loading/>) : (
    <Box>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
      
          }}
        >
          <Typography component="h1" variant="h5">
            Login
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
              >
              Logar
              </Button>
            <Link to="/signin">Cadastre-se</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
