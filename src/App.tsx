import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "./common/styles/colorTheme";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
