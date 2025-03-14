import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Home";
const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  );
};

export default HomeRouter;
