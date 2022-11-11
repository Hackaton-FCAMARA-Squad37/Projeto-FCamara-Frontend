import { Box, Typography, useMediaQuery } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

export const InputCustomized = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [clicado, setClicado] = useState(false);

  return (
    <Box
      sx={{
        paddingBottom: `${mobile ? "1.5rem" : "2.5rem"}`,
      }}
    >
      <Typography pb="0.5rem">{props.texto}</Typography>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "milkshake.main",
          color: `${clicado ? "primary.main" : "tea.main"}`,
          paddingLeft: "1.5rem",
          borderRadius: "4px",
          border: "1px solid",
        }}
      >
        {props.tipo == "senha" ? (
          <LockIcon
            sx={{
              margin: "auto",
            }}
          />
        ) : props.tipo == "email" ? (
          <MailIcon
            sx={{
              margin: "auto",
            }}
          />
        ) : props.tipo == "usuario" ? (
          <Person2Icon
            sx={{
              margin: "auto",
            }}
          />
        ) : (
          ""
        )}

        <input
          onFocus={() => setClicado(true)}
          onBlur={() => setClicado(false)}
          className="input"
          placeholder={props.placeholder}
          type={props.tipo=='senha'? 'password':props.tipo=='email'? 'email': 'text'}
          style={{
            width: "100%",
            backgroundColor: "#484848",
            border: "0",
            borderRadius: "4px",
            height: `${mobile ? "3rem" : "3.5rem"}`,
            paddingLeft:'10px',
            fontSize: `${mobile ? '1rem' : '1.25rem'}`,
            fontFamily: 'Raleway, sans-serif',
            color: `${clicado? '#F8F8F8' : '#9B9B9B'}`,
            outline: 'none'
          }}
        />
      </Box>
    </Box>
  );
};
