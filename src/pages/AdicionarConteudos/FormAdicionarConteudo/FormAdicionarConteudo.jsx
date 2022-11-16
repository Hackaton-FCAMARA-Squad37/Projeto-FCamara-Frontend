import { Box, Typography, useMediaQuery } from "@mui/material";
import { BotaoGenerico } from "../../../components/BotaoGenerico/BotaoGenerico";
import { InputSimples } from "../../../components/InputSimples/InputSimples";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

export const FormAdicionarConteudo = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const descricaoRef = useRef(null);
  const duracaoRef = useRef(null);
  const linkRef = useRef(null);
  const formatoRef = useRef(null);
  const tituloRef = useRef(null);
  const donoConteudoRef = useRef(null);
  const categoriaRef = useRef(null);
  const nomeTemaRef = useRef(null);
  const { state } = props;
  const [conteudoAdicionado, setConteudoAdicionado] = useState(false);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    data.tema = props.titulo ? props.titulo : data.tema;
    data.duracao = parseInt(data.duracao);
    await axios
      .post("http://orange-evolution-squad37.herokuapp.com/conteudos", {
        titulo: data.titulo,
        tipo: data.formato,
        duracao: data.duracao,
        descricao: data.descricao,
        link: data.link,
        donoConteudo: data.donoConteudo,
        tags: data.categoria,
        divisao: data.tema,
        idTema: state.idTema,
      })
      .then(() => {
        setConteudoAdicionado(true);
      })
      .catch(() => {
        setErro("Falha ao cadastrar conteúdo");
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        border: "1px solid",
        borderColor: "milkshake.main",
        borderRadius: "8px",
        padding: `${mobile ? "1.5rem 1rem" : "3.5rem 3rem"}`,
        display: "flex",
        flexDirection: "column",
        gap: mobile ? "1.5rem" : "2.5rem",
        margin: mobile ? "0" : "0 auto",
        minWidth: mobile ? "" : "500px",
      }}
    >
      <InputSimples
        tipo="texto"
        placeholder="Escreva o título"
        nome="Titulo"
        nomeValidacao="titulo"
        reference={tituloRef}
        register={register}
        error={errors.titulo}
      />
      <InputSimples
        tipo="texto"
        placeholder="Escreva a descrição"
        nome="Descrição"
        nomeValidacao="descricao"
        register={register}
        reference={descricaoRef}
        error={errors.descricao}
      />
      <InputSimples
        tipo="number"
        placeholder="Digite a duração (em min)"
        nome="Duração"
        nomeValidacao="duracao"
        register={register}
        reference={duracaoRef}
        error={errors.duracao}
      />
      <InputSimples
        tipo="texto"
        placeholder="https://exemplo.com"
        nome="Link"
        nomeValidacao="link"
        register={register}
        reference={linkRef}
        error={errors.link}
      />
      <InputSimples
        tipo="texto"
        placeholder="De quem é esse conteúdo?"
        nome="Fonte do Conteúdo"
        nomeValidacao="donoConteudo"
        register={register}
        reference={donoConteudoRef}
        error={errors.donoConteudo}
      />
      <InputSimples
        tipo="texto"
        placeholder="Escreva a categoria"
        nome="Categoria"
        nomeValidacao="categoria"
        register={register}
        reference={categoriaRef}
        error={errors.categoria}
      />
      <InputSimples
        tipo="select"
        nome="Formato do conteúdo"
        nomeValidacao="formato"
        register={register}
        reference={formatoRef}
        error={errors.formato}
      />
      <InputSimples
        tipo="texto"
        placeholder="Escreva o nome do Tema"
        nome="Tema"
        nomeValidacao="tema"
        reference={nomeTemaRef}
        register={register}
        error={errors.nomeTema}
        valorPadrao={state.titulo}
      />
      <BotaoGenerico texto="Publicar conteúdo" />
      {conteudoAdicionado ? (
        navigate(-1)
      ) : erro == "" ? (
        <></>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "0.75rem 0rem",
          }}
        >
          <Typography
            sx={{
              fontSize: mobile ? "1rem" : "1.25rem",
              color: "#ff3838",
            }}
          >
            {erro}
          </Typography>
          <ErrorIcon
            sx={{
              marginLeft: "0.5rem",
              paddingTop: "2px",
              color: "#ff3838",
            }}
          />
        </Box>
      )}
    </Box>
  );
};
