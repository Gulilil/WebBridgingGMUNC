import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Episodes from "./components/pages/Episodes";
import Quests from "./components/pages/Quests";
import Committee from "./components/pages/Commitee";


const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/quests" element={<Quests />} />
      <Route path="/committee" element={<Committee />} />
    </Routes>
  );
};

export default RoutesConfig;