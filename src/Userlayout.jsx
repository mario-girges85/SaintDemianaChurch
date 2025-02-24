import React from "react";
import { Route, Routes } from "react-router";
import Timetablepage from "./pages/the church/time table/TImetablepage";
import Home from "./pages/Home/Home";
import Navbar from "./components/Nav/Navbar";
import HistoryOfTheChurch from "./pages/the church/History of the church/HistoryOfTheChurch";
import NotFound from "./pages/NotFound";
import Fathers from "./pages/the church/fathers/Fathers";
import SaintDemiana from "./pages/the church/saint demiana/SaintDemiana";
import Al7anLibrary from "./pages/Library/Al7anLibrary";
const Userlayout = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>
        {/* church */}
        <Route path="/timetablepage" element={<Timetablepage />}></Route>
        <Route path="/fathers" element={<Fathers />}></Route>
        <Route path="/saintdemiana" element={<SaintDemiana />}></Route>
        <Route
          path="/historyofthechurch"
          element={<HistoryOfTheChurch />}
        ></Route>
        <Route path="/Al7anLibrary" element={<Al7anLibrary />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Userlayout;
