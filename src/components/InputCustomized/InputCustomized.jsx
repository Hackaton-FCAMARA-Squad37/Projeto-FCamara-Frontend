import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export const InputCustomized = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [focus, setFocus] = useState(false);
    const [visibility, setVisibility] = useState(true)

  return (
    <Box
      sx={{
        paddingBottom: `${mobile ? "1.5rem" : "2.5rem"}`,
      }}
    >
      <Typography fontSize={mobile ? "1rem" : "1.25rem"} pb="0.5rem">
        {props.texto}
      </Typography>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "milkshake.main",
          color: `${focus ? "primary.main" : "tea.main"}`,
          paddingLeft: "1.5rem",
          borderRadius: "4px",
          border: "1px solid",
        }}
      >
        {props.tipo == "senha" ? (
          <>
            <LockIcon
              sx={{
                margin: "auto",
              }}
            />
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="input"
              id={props.idInput}
              placeholder={props.placeholder}
              type={visibility?'password':'text'}
              style={{
                width: "100%",
                backgroundColor: "#484848",
                border: "0",
                borderRadius: "4px",
                height: `${mobile ? "3rem" : "3.5rem"}`,
                paddingLeft: "10px",
                fontSize: `${mobile ? "1rem" : "1.25rem"}`,
                fontFamily: "Raleway, sans-serif",
                color: `${focus ? "#F8F8F8" : "#9B9B9B"}`,
                outline: "none",
              }}
            />
            <button onClick={()=> {setVisibility(!visibility) || setFocus(true)}} 
            style={{backgroundColor:'#484848', border:'0', color:`${focus? '#00C09B': '#9B9B9B'}`, marginTop:'auto', marginBottom:'auto', marginRight:'20px', cursor:'pointer'}}>
                {visibility?<VisibilityIcon/>:<VisibilityOffIcon/>}
            </button>
          </>
        ) : props.tipo == "email" ? (
          <>
            <MailIcon
              sx={{
                margin: "auto",
              }}
            />
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="input"
              id={props.idInput}
              placeholder={props.placeholder}
              type='email'
              style={{
                width: "100%",
                backgroundColor: "#484848",
                border: "0",
                borderRadius: "4px",
                height: `${mobile ? "3rem" : "3.5rem"}`,
                paddingLeft: "10px",
                fontSize: `${mobile ? "1rem" : "1.25rem"}`,
                fontFamily: "Raleway, sans-serif",
                color: `${focus ? "#F8F8F8" : "#9B9B9B"}`,
                outline: "none",
              }}
            />
          </>
        ) : props.tipo == "usuario" ? (
          <>
            <Person2Icon
              sx={{
                margin: "auto",
              }}
            />
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="input"
              id={props.idInput}
              placeholder={props.placeholder}
              type="text"
              style={{
                width: "100%",
                backgroundColor: "#484848",
                border: "0",
                borderRadius: "4px",
                height: `${mobile ? "3rem" : "3.5rem"}`,
                paddingLeft: "10px",
                fontSize: `${mobile ? "1rem" : "1.25rem"}`,
                fontFamily: "Raleway, sans-serif",
                color: `${focus ? "#F8F8F8" : "#9B9B9B"}`,
                outline: "none",
              }}
            />
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};