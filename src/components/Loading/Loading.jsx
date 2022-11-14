import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import LoadingSpin from 'react-loading-spin'

export const Loading = () => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            height:`${mobile?'95%':'90%'}`,
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'coffee.main',
            position:'absolute',
            zIndex:'1'
        }}>
            <Box sx={{
                maxWidth:'100%'
            }}>
                <LoadingSpin primaryColor='#00C09B' secondaryColor='#161616'/>
            </Box>
        </Box>
    )
}