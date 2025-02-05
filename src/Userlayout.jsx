import React from "react";
import { Route, Routes } from "react-router";
import Timetablepage from "./pages/time table/TImetablepage";
import Home from "./pages/Home/Home";
const Userlayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/timetablepage" element={<Timetablepage />}></Route>
      </Routes>
    </div>
  );
};

export default Userlayout;
