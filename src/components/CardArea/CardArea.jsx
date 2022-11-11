import { Box, Typography, useMediaQuery } from "@mui/material";

export const CardArea = (props) => {
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
        width: `${desktopWide ? "100%" : "30%"}`,
        position:`${desktopWide?'relative':''}`
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
          position:`${desktopWide?'absolute':''}`,
          margin:`${desktopWide?'0':'auto'}`,
          top: `${desktopWide?'30%':''}`,
          left: `${desktopWide?'20%':'0'}`
        }}
      />
      <Typography
        fontWeight="600"
        fontSize={desktopWide ? "1rem" : "1.5rem"}
        sx={{
          padding: `${desktopWide ? "" : ""}`,
          position:`${desktopWide?'absolute':''}`,
          top: `${desktopWide?'30%':''}`,
          left: `${desktopWide?'40%':'0'}`,
          margin:`${desktopWide?'0':'auto'}`,
        }}
      >
        {props.texto}
      </Typography>
    </Box>
  );
};
