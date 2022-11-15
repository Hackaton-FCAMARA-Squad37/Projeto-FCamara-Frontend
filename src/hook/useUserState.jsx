import { useContext, useState } from "react";
import UserContext from "../context/user/UserContext.jsx";

export default function useUserState() {
  const [logedUser, setLogedUser] = useState({});
  const contextLogado = useContext(UserContext);
  const logado = contextLogado.usuario[0];
  try {
    if (logado && logado != logedUser) setLogedUser(logado);
    return logedUser;
  } catch (e) {
    return e;
  }
}
