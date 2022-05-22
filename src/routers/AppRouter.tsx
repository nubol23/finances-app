import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import "./app_router.scss";
import RegisterScreen from "../components/auth/RegisterScreen";

const AppRouter = () => {
  return (
    <div className="site-container">
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
