import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default AppRouter;
