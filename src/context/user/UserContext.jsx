import axios from "axios";
import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  const login = async (email, senha) => {
    await axios
      .post("https://orange-evolution-squad37.herokuapp.com/login", {
        email: email,
        senha: senha,
      })
      .then((response) => setUsuario(response.data))
      .catch((error) => error);
  };

  const logout = () => {
    window.location.reload(true);
    location.reload();
    setUsuario({});
  };

  const value = {
    usuario,
    setUsuario,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
