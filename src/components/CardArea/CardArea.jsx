import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export const CardArea = (props) => {
  const desktopWide = useMediaQuery("(max-width:1200px)");
  const cellphone = useMediaQuery("(max-width:480px)");

  return (
      <Link to={props.caminho} style={{
        color:'#F8F8F8',
        textDecoration:'none',
        width: `${desktopWide ? "100%" : "30%"}`,
        cursor:`${props.cursor}`
      }}>
        <Box
          sx={{
            borderRadius: "8px",
            display: "flex",
            flexDirection: `${desktopWide ? "row" : "column"}`,
            backgroundColor: "vitamin.main",
            color: "water.main",
            marginBottom: "1rem",
            border: `1px solid`,
            borderColor: `${desktopWide ? "tea.main" : "milkshake.main"}`,
            height: `${desktopWide ? "6rem" : "22rem"}`,
            width: '100%',
            position: `${desktopWide ? "relative" : ""}`,
            cursor: `${props.cursor}`
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${props.imagem})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: `${props.size}`,
              height: `${props.size}`,
              borderRadius: "8px",
              position: `${desktopWide ? "absolute" : ""}`,
              margin: `${desktopWide ? "0" : "auto"}`,
              top: `${desktopWide ? "30%" : ""}`,
              left: `${desktopWide ? (cellphone ? "10%" : "20%") : "0"}`,
            }}
          />
          <Typography
            fontWeight="600"
            fontSize={desktopWide ? "1rem" : "1.5rem"}
            sx={{
              padding: `${desktopWide ? "" : ""}`,
              position: `${desktopWide ? "absolute" : ""}`,
              top: `${desktopWide ? "40%" : ""}`,
              left: `${desktopWide ? (cellphone ? `calc(15% + ${props.size})` : `calc(25% + ${props.size})`) : "0"}`,
              margin: `${desktopWide ? "0" : "auto"}`,
            }}
          >
            {props.texto}
          </Typography>
        </Box>
      </Link>
  );
};
