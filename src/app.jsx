import { Painel } from "./pages/Painel/Painel.jsx";
import { Areas } from "./pages/Areas/Areas.jsx";
import { UxuiPage } from "./pages/UxuiPage/UxuiPage.jsx";
import { QaPage } from "./pages/QaPage/QaPage.jsx";
import { DevPage } from "./pages/DevPage/DevPage.jsx";
import {
  UxuiColetar,
  UxuiRegar,
  UxuiSemear,
} from "./pages/Trails/Uxui/Uxui.jsx";
import {
  DevsColetar,
  DevsRegar,
  DevsSemear,
} from "./pages/Trails/Devs/Devs.jsx";
import { QaColetar, QaRegar, QaSemear } from "./pages/Trails/Qa/Qa.jsx";
import { AdicionarConteudos } from "./pages/AdicionarConteudos/AdicionarConteudos.jsx";
import { AtualizarUsuario } from "./pages/AtualizarUsuario/AtualizarUsuario.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Register } from "./pages/Register/Register.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import useUserState from "./hook/useUserState.jsx";

export const App = () => {
  const loged = useUserState();

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/painel" element={<Painel autorizado={loged.id} />} />
          <Route path="/areas" element={<Areas autorizado={loged.id} />} />
          <Route
            path="/caminhouxui"
            element={<UxuiPage autorizado={loged.id} />}
          />
          <Route path="/caminhoqa" element={<QaPage autorizado={loged.id} />} />
          <Route
            path="/caminhodev"
            element={<DevPage autorizado={loged.id} />}
          />
          <Route
            path="/caminhouxui/semear"
            element={<UxuiSemear autorizado={loged.id} />}
          />
          <Route
            path="/caminhouxui/regar"
            element={<UxuiRegar autorizado={loged.id} />}
          />
          <Route
            path="/caminhouxui/coletar"
            element={<UxuiColetar autorizado={loged.id} />}
          />
          <Route
            path="/caminhodev/semear"
            element={<DevsSemear autorizado={loged.id} />}
          />
          <Route
            path="/caminhodev/regar"
            element={<DevsRegar autorizado={loged.id} />}
          />
          <Route
            path="/caminhodev/coletar"
            element={<DevsColetar autorizado={loged.id} />}
          />
          <Route
            path="/caminhoqa/semear"
            element={<QaSemear autorizado={loged.id} />}
          />
          <Route
            path="/caminhoqa/regar"
            element={<QaRegar autorizado={loged.id} />}
          />
          <Route
            path="/caminhoqa/coletar"
            element={<QaColetar autorizado={loged.id} />}
          />
          <Route
            path="/adicionar-conteudos"
            element={<AdicionarConteudos autorizado={loged.isAdmin} />}
          />
          <Route
            path="/atualizar-usuario"
            element={
              <AtualizarUsuario autorizado={loged.id && !loged.isAdmin} />
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
