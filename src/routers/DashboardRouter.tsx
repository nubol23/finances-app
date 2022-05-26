import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Navbar from "../components/common/Navbar/Index";
import Summary from "../components/Summary/Index";

const DashboardRouter = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
