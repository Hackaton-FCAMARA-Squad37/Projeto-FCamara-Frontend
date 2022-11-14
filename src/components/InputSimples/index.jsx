import { Box, useMediaQuery } from "@mui/material";

export const InputSimples = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label
        style={{
          fontSize: `${mobile ? "1rem" : "1.25rem"}`,
          fontFamily: "Raleway, sans-serif",
        }}
      >
        {props.nome}
      </label>
      {props.tipo == "select" ? (
        <select
          name="formato do conteúdo"
          ref={props.reference}
          {...props.register(props.nomeValidacao, { required: true })}
          style={{
            width: "auto",
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
        >
          <option value="Vídeo">Vídeo</option>
          <option value="Artigo">Artigo</option>
          <option value="Podcast">Podcast</option>
        </select>
      ) : props.tipo == "texto" ? (
        <input
          type="text"
          ref={props.reference}
          {...props.register(props.nomeValidacao, { required: true })}
          placeholder={props.placeholder}
          style={{
            width: "auto",
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
      ) : props.tipo == "number" ? (
        <input
          type="number"
          ref={props.reference}
          {...props.register(props.nomeValidacao, { required: true })}
          placeholder={props.placeholder}
          style={{
            width: "auto",
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
      ) : (
        <input
          type="url"
          ref={props.reference}
          {...props.register(props.nomeValidacao, { required: true })}
          placeholder={props.placeholder}
          style={{
            width: "auto",
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
      )}
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
    </Box>
  );
};
