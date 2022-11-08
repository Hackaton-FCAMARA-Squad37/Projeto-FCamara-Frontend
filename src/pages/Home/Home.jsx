import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Header/Header";

export function Home() {
    return (
        <Box>
            <Header></Header>
            <Typography>Home</Typography>
            <Box id='section-trilhas' p={2}>
                <Typography>Trilhas</Typography>
            </Box>
        </Box>
    )
}