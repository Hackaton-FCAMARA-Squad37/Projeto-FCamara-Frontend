import { Box } from "@mui/system"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, useMediaQuery } from "@mui/material";

export const ReturnButton = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            marginBottom: `${mobile ? "2rem" : "4rem"}`,
          }}
        >
          <ArrowBackIcon
            sx={{
              height: `${mobile ? "1.3rem" : "2.25rem"}`,
            }}
          />
          <Typography
            height={mobile ? "" : "1.5rem"}
            sx={{
              fontSize: `${mobile ? "1rem" : "1.5rem"}`,
              paddingLeft: `${mobile ? "0.5rem" : "1.375rem"}`,
              fontWeight:`${mobile?'':'600'}`
            }}
          >
            Voltar
          </Typography>
        </Box>
    )
}