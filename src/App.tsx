import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "./common/styles/colorTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
