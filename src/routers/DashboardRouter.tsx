import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Navbar from "../components/common/Navbar/Index";

const DashboardRouter = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
