import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"

export const AreaUXUI = () => {
    const mobile = useMediaQuery('(max-width:768px)')
    const desktopWide = useMediaQuery('(max-width:1200px)')

    return (
        <Box bgcolor="coffee.main"
        color="water.main"
        textAlign="justify"
        sx={{
          padding: `${mobile ? "4rem" : "9rem"} ${
            mobile ? "1.5rem" : "4.5rem"
          } ${mobile ? "4rem" : "9rem"} ${mobile ? "1.5rem" : "4.5rem"}`,
        }}>
          Oi
        </Box>
    )
}