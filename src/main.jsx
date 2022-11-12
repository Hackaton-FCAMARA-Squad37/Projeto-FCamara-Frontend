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
import { AreaQA } from "./pages/areaQA/areaQA.jsx";
import { AreaDEV } from "./pages/areaDEV/areaDEV.jsx";
import { AreaUXUI } from "./pages/areaUXUI/areaUXUI.jsx";

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
              <Route path="/areauxui" element={<AreaUXUI />}/>
              <Route path="/areaqa" element={<AreaQA />}/>
              <Route path="/areadev" element={<AreaDEV />}/>
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
