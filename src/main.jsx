import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./style/theme.js";
import "../src/style/reset.css";
import { UserContextProvider } from "../src/context/user/UserContext.jsx";

import { App } from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
