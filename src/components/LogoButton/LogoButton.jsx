import { Link } from "react-router-dom"
import { Box, useMediaQuery } from "@mui/material"
import imagemLogo from '../../assets/logoOrangeJuice.png'

export const LogoButton = (props) => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Link to='/' onClick={props.onClick}>
            <Box
            sx={
            {
                backgroundImage: `url(${imagemLogo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: `${mobile?'2.5rem':'4rem'}`,
                height: `${mobile?'2.5rem':'4rem'}`,
                mt: '2px'
            }}
            />
        </Link>
    )
}