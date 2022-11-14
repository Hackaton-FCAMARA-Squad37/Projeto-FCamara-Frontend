import { Box, useMediaQuery } from "@mui/material";
import { BotaoGenerico } from "../../../components/BotaoGenerico";
import { InputSimples } from "../../../components/InputSimples";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";

export const FormAdicionarConteudo = (props) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const descricaoRef = useRef(null);
  const duracaoRef = useRef(null);
  const linkRef = useRef(null);
  const formatoRef = useRef(null);
  const tituloRef = useRef(null);
  const donoConteudoRef = useRef(null);
  const categoriaRef = useRef(null);

  console.log(props.stateTituloTema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    data.tema = props.stateTituloTema;
    data.duracao = parseInt(data.duracao);
    console.log(data);
    // await axios.post('http://orange-evolution-squad37.herokuapp.com/conteudos', {
    //     titulo: "",
    // tipo: "tipo1",
    // duracao: "00:00",
    // descricao:"descricao maneira",
    // link: "https://www.link.com",
    // donoConteudo: "euMesmo",
    // tags:"aquela,tag,ali",
    // divisao: "",
    // idTema: "3"
    // }).then();
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
      <BotaoGenerico texto="Publicar conteúdo" />
    </Box>
  );
};
