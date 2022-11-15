import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";
import { InputCustomized } from "../../components/InputCustomized/InputCustomized";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "@mui/material";
import logoOrangeJuice from "../../assets/logoOrangeJuice.png";
import { Loading } from "../../components/Loading/Loading";

export function Login() {
  const { login } = useContext(UserContext);
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
  const mobile = useMediaQuery("(max-width:768px)");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleSubmitLogin = async (data) => {
    setLoading(true);
    await login(data.email, data.senha), navigate("/painel");
  };

  return loading ? (
    <Loading />
  ) : (
    <Container
      component="div"
      maxWidth="100%"
      sx={{
        backgroundColor: "coffee.main",
        padding: "4rem 1.5rem",
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: `${mobile ? "column" : "row"}`,
          gap: `${mobile ? "1.5rem" : "7.5rem"}`,
          alignItems: `${mobile ? "" : "center"}`,
        }}
      >
        <Box>
          {mobile ? (
            ""
          ) : (
            <Box
              sx={{
                backgroundImage: `url(${logoOrangeJuice})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "100px",
                height: "100px",
              }}
            />
          )}

          <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
            Olá, acesse sua conta
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(handleSubmitLogin)}
          sx={{
            border: "1px solid",
            borderColor: "milkshake.main",
            borderRadius: "8px",
            padding: `${mobile ? "1.5rem 1rem" : "3.5rem 3rem"}`,
          }}
        >
          <InputCustomized
            tipo="email"
            texto="Seu e-mail"
            id="email"
            placeholder="exemplo@email.com"
            reference={emailRef}
            register={register}
            error={errors.email}
          />
          <InputCustomized
            tipo="senha"
            texto="Sua senha"
            id="senha"
            placeholder="*********"
            reference={senhaRef}
            register={register}
            error={errors.senha}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, padding: "0.75rem 0", fontWeight: 600 }}
          >
            Entrar
          </Button>
          <Typography
            sx={{ textAlign: "center", marginTop: "2rem", marginBottom: "0" }}
          >
            Não tem uma conta?{" "}
            <Link to="/signin" style={{ color: "white", fontWeight: 600 }}>
              Cadastre-se
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
