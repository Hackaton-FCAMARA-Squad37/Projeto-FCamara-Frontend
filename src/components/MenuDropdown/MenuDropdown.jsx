import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import { styled, alpha } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor:'#0A0707',
    border:'1px solid',
    borderColor:'#9B9B9B',
    padding:'2rem',
    color:
      '#F8F8F8',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0'
    },
    '& .MuiMenuItem-root': {
        
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: '#00C09B',
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


export const MenuDropdown = (props) => {
    const contexto = useContext(UserContext)
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        color: "primary.main",
        maxWidth: "10rem",
        display: "flex",
        width: "fitContent",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
        }}
      >
        Olá, {props.nome[0].toUpperCase() + props.nome.substr(1).toLowerCase()}
      </Typography>
      <Box
      aria-controls={open?'basic-menu':undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' :undefined}
      onClick={handleClick}
        sx={{
          display: "flex",
          cursor: 'pointer'
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight:'600'
          }}
        >
          Perfil e sair
        </Typography>
        <ArrowDropDownIcon sx={{
            height:'2rem'
        }}/>
      </Box>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
            handleClose()
            navigate('/painel')
            }}>Painel</MenuItem>
        <MenuItem onClick={()=>{
            handleClose()

            }}><a target='_blank' href="https://www.fcamara.com.br/canal-transparencia" style={{color:'white', textDecoration:'none'}}>Ajuda</a></MenuItem>
        <Divider sx={{backgroundColor:'water.main'}}/>
        <MenuItem onClick={()=>{
            handleClose()
            navigate('/')
            contexto.logout()
        }}><LogoutIcon/>Sair da plataforma</MenuItem>
      </StyledMenu>
    </Box>
  );
};
