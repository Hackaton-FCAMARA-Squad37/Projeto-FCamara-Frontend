import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { theme } from "./style/theme.js";
import "../src/style/reset.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Register } from "./pages/Register/Register.jsx";
import { UserContextProvider } from "../src/context/user/UserContext.jsx";
import { Painel } from "./pages/Painel/Painel.jsx";
import { Areas } from "./pages/Areas/Areas.jsx";
import { UxuiPage } from "./pages/UxuiPage/UxuiPage.jsx";
import { QaPage } from "./pages/QaPage/QaPage.jsx";
import { DevPage } from "./pages/DevPage/DevPage.jsx";
import {
  UxuiSemear,
  UxuiRegar,
  UxuiColetar,
} from "./pages/Trails/Uxui/Uxui.jsx";
import {
  DevsColetar,
  DevsRegar,
  DevsSemear,
} from "./pages/Trails/Devs/Devs.jsx";
import { QaColetar, QaRegar, QaSemear } from "./pages/Trails/Qa/Qa.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>
          <header>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Register />} />
              <Route path="/painel" element={<Painel />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/caminhouxui" element={<UxuiPage />} />
              <Route path="/caminhoqa" element={<QaPage />} />
              <Route path="/caminhodev" element={<DevPage />} />
              <Route path="/caminhouxui/semear" element={<UxuiSemear />} />
              <Route path="/caminhouxui/regar" element={<UxuiRegar />} />
              <Route path="/caminhouxui/coletar" element={<UxuiColetar />} />
              <Route path="/caminhodev/semear" element={<DevsSemear />} />
              <Route path="/caminhodev/regar" element={<DevsRegar />} />
              <Route path="/caminhodev/coletar" element={<DevsColetar />} />
              <Route path="/caminhoqa/semear" element={<QaSemear />} />
              <Route path="/caminhoqa/regar" element={<QaRegar />} />
              <Route path="/caminhoqa/coletar" element={<QaColetar />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
