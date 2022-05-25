import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import "./app_router.scss";
import RegisterScreen from "../components/auth/RegisterScreen";
import Home from "../components/home";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import DashboardRouter from "./DashboardRouter";

const AppRouter = () => {
  return (
    <div className="site-container">
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        />
        <Route
          path="register"
          element={
            <PublicRouter>
              <RegisterScreen />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <DashboardRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
