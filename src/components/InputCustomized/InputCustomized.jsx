import { Box, Typography, useMediaQuery } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";

export const InputCustomized = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [focus, setFocus] = useState(false);
  const [visibility, setVisibility] = useState(true);

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
          color: `${
            focus
              ? props.error
                ? "error.main"
                : "sucess.main"
              : props.error
              ? "error.main"
              : "tea.main"
          }`,
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
                color: `${
                  props.error == undefined
                    ? document.getElementById(props.id)
                      ? document.getElementById(props.id).value
                        ? "inherit"
                        : ""
                      : ""
                    : "inherit"
                }`,
              }}
            />
            <input
              ref={props.reference}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              defaultValue={props.valorPadrao ?? ""}
              id={props.id}
              {...props.register("senha", { required: true })}
              placeholder={props.placeholder}
              type={visibility ? "password" : "text"}
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
            <Box
              onClick={() => {
                setVisibility(!visibility) || setFocus(true);
              }}
              style={{
                backgroundColor: "#484848",
                border: "0",
                color: `${focus ? "inherit" : "#9B9B9B"}`,
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Box>
          </>
        ) : props.tipo == "email" ? (
          <>
            <MailIcon
              sx={{
                margin: "auto",
                color: `${
                  props.error == undefined
                    ? document.getElementById(props.id)
                      ? document.getElementById(props.id).value
                        ? "inherit"
                        : ""
                      : ""
                    : "inherit"
                }`,
              }}
            />
            <input
              ref={props.reference}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              defaultValue={props.valorPadrao ?? ""}
              id={props.id}
              placeholder={props.placeholder}
              {...props.register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              type="email"
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
            {props.error == undefined ? (
              document.getElementById(props.id) ? (
                document.getElementById(props.id).value ? (
                  <CheckCircleIcon
                    sx={{
                      margin: "auto",
                      marginRight: "26.6px",
                      color: "sucess.main",
                    }}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            ) : props.error.type == "required" ? (
              <ErrorIcon sx={{ margin: "auto", marginRight: "26.6px" }} />
            ) : (
              <CancelIcon sx={{ margin: "auto", marginRight: "26.6px" }} />
            )}
          </>
        ) : props.tipo == "usuario" ? (
          <>
            <Person2Icon
              sx={{
                margin: "auto",
                color: `${
                  props.error == undefined
                    ? document.getElementById(props.id)
                      ? document.getElementById(props.id).value
                        ? "white"
                        : ""
                      : ""
                    : "inherit"
                }`,
              }}
            />
            <input
              ref={props.reference}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              defaultValue={props.valorPadrao ?? ""}
              id={props.id}
              placeholder={props.placeholder}
              {...props.register("nome", { required: true })}
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
            {props.error == undefined ? (
              document.getElementById(props.id) ? (
                document.getElementById(props.id).value ? (
                  <CheckCircleIcon
                    sx={{
                      margin: "auto",
                      marginRight: "26.6px",
                      color: "sucess.main",
                    }}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            ) : (
              <ErrorIcon sx={{ margin: "auto", marginRight: "26.6px" }} />
            )}
          </>
        ) : (
          <></>
        )}
      </Box>
      {props.error?.type === "required" && (
        <p
          style={{
            color: "#FF3838",
            marginTop: "10px",
            fontFamily: "Raleway",
          }}
        >
          Este campo é obrigatório
        </p>
      )}
      {props.error?.type === "pattern" && (
        <p
          style={{
            color: "#FF3838",
            marginTop: "10px",
            fontFamily: "Raleway",
          }}
        >
          Este e-mail não é válido
        </p>
      )}
    </Box>
  );
};
