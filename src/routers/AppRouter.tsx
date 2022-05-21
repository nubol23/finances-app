import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import "./app_router.scss";

const AppRouter = () => {
  return (
    <div className="site-container">
      <Routes>
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
