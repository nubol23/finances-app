import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
