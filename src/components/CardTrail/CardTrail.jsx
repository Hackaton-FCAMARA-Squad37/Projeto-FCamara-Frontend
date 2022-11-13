import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";

export const CardTrail = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const desktopWide = useMediaQuery("(max-width:1200px)");
  const { usuario } = useContext(UserContext);

  const iniciarTrilhaOnClick = async () => {
    await axios
      .post("https://orange-evolution-squad37.herokuapp.com/linka-user", {
        usuarioId: usuario.id,
        temaId: props.temaId,
      })
      .then((response) => console.log(response));
  };

  return (
    <Box
      onClick={() => {
        console.log("oi");
      }}
      sx={{
        backgroundColor: "vitamin.main",
        display: "flex",
        flexDirection: `${mobile ? "column" : "row"}`,
        padding: `${mobile ? "3rem 1.5rem 2.5rem 1.5rem" : "4rem"}`,
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "tea.main",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          marginBottom: `${mobile ? "1.75rem" : ""}`,
          marginRight: `${mobile ? "" : "4rem"}`,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${props.imagem})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            borderRadius: "8px",
            margin: `${desktopWide ? "0" : "auto"}`,
            top: `${desktopWide ? "30%" : ""}`,
            left: `${desktopWide ? "20%" : "0"}`,
            width: `${mobile ? "3.5rem" : "4rem"}`,
            height: `${mobile ? "3.5rem" : "4rem"}`,
            marginBottom: "1.75rem",
          }}
        />
        <Typography fontWeight="600" fontSize={mobile ? "1rem" : "1.25rem"}>
          {props.titulo}
        </Typography>
      </Box>
      <Typography
        fontWeight="400"
        fontSize={mobile ? "1rem" : "1.25rem"}
        sx={{
          marginBottom: `${mobile ? "2.5rem" : ""}`,
          marginRight: `${mobile ? "" : "3.25rem"}`,
        }}
      >
        {props.descricao}
      </Typography>
      <Box
        color="primary.main"
        onClick={iniciarTrilhaOnClick}
        sx={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            minWidth: `${mobile ? "" : "5.3rem"}`,
          }}
        >
          Iniciar trilha
        </Typography>
      </Box>
    </Box>
  );
};
