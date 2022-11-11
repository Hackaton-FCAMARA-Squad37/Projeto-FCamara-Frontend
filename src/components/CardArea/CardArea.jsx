import { Box, Typography, useMediaQuery } from "@mui/material";

export const CardArea = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const desktopWide = useMediaQuery("(max-width:1200px)");
  return (
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
        width: `${desktopWide ? "100%" : "30%"}`
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
          margin: "auto",
        }}
      />
      <Typography
        fontWeight="600"
        fontSize={desktopWide ? "1rem" : "1.5rem"}
        sx={{
          margin: "auto",
          padding: `${desktopWide ? "" : ""}`,
        }}
      >
        {props.texto}
      </Typography>
    </Box>
  );
};
