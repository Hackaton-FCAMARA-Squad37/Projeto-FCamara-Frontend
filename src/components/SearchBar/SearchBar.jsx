import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from "@mui/material";

export const SearchBar = (props) => {
    const mobile = useMediaQuery('(max-width:768px)')

    return (
        <Box 
        borderRadius='5px' 
        backgroundColor='primary.main' 
        p={mobile?'0.75rem':''} 
        height={mobile?'50%':'3.5rem'} 
        width={mobile?'55%':'3.5rem'}
        sx={{
            cursor:'pointer'
        }}>
            <SearchIcon sx={{
                color:'vitamin.main',
                height:'1.5rem',
                width:'1.5rem'
            }}/>
        </Box>
    )
}