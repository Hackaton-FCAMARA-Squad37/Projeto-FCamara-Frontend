import { Typography, useMediaQuery, Button } from "@mui/material";

export const BotaoGenerico = (props) => {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <Button
      onClick={props.clicado}
      variant="contained"
      sx={{
        height: `${mobile ? "3rem" : "3.5rem"}`,
        color: "vitamin.main",
        borderRadius: "4px",
        width: "100%",
        backgroundColor: "primary.main",
        margin: "auto",
        marginRight: mobile ? "" : "0",
      }}
      type="submit"
    >
      <Typography
        color="black"
        fontWeight="600"
        sx={{
          fontSize: `${mobile ? "1rem" : "1.25rem"}`,
        }}
      >
        {props.texto}
      </Typography>
    </Button>
  );
};
