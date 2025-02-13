import React from "react";
import Carousel from "./Carousel/Carousel";
import Navbar from "../../components/Nav/Navbar";
import ListWrapper from "./List/ListWrapper";
import HistoryOfTheChurch from "./history of the church/HistoryOfTheChurch";
const Home = () => {
  return (
    <div className=" flex flex-col gap-24  m-auto">
      <Carousel />
      <ListWrapper />
      <HistoryOfTheChurch />
    </div>
  );
};

export default Home;
