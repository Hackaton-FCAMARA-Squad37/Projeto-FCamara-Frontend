import { Link } from "react-router-dom"
import { Box, useMediaQuery } from "@mui/material"
import imagemLogo from '../../assets/logofcamara.png'

export const LogoButton = (props) => {
    const cellphone = useMediaQuery('(max-width:600px)')

    return (
        <Link to='/' onClick={props.onClick}>
            <Box
            sx={
            {
                backgroundImage: `url(${imagemLogo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: `${cellphone?'2.5rem':'4rem'}`,
                height: `${cellphone?'2.5rem':'4rem'}`,
                mt: '2px'
            }}
            />
        </Link>
    )
}