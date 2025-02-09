import React from "react";
import Timetable from "./ads/Timetable";
import Carousel from "./Carousel/Carousel";
import Navbar from "../../components/Nav/Navbar";
const Home = () => {
  return (
    <div className="   m-auto">
      <Carousel />
      <Timetable />
    </div>
  );
};

export default Home;
