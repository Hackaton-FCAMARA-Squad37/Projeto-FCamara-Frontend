import { Typography, useMediaQuery, Button } from "@mui/material";

export const BotaoGenerico = (props) => {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <Button
      variant="contained"
      sx={{
        height: `${mobile ? "3rem" : "3.5rem"}`,
        color: "vitamin.main",
        borderRadius: "4px",
        width: `${mobile ? "100%" : "contain"}`,
        backgroundColor: "primary.main",
        margin: "auto",
        marginRight: mobile ? "" : "0",
        width: "100%",
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
