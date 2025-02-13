import React from "react";
import { Route, Routes } from "react-router";
import Timetablepage from "./pages/the church/time table/TImetablepage";
import Home from "./pages/Home/Home";
import Navbar from "./components/Nav/Navbar";
import HistoryOfTheChurch from "./pages/the church/History of the church/HistoryOfTheChurch";
import NotFound from "./pages/NotFound";
const Userlayout = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/timetablepage" element={<Timetablepage />}></Route>
        <Route path="/timetablepage" element={<Timetablepage />}></Route>
        <Route
          path="/historyofthechurch"
          element={<HistoryOfTheChurch />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Userlayout;
