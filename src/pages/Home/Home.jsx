import React from "react";
import Carousel from "./Carousel/Carousel";
import Navbar from "../../components/Nav/Navbar";
import ListWrapper from "./List/ListWrapper";
const Home = () => {
  return (
    <div className="   m-auto">
      <Carousel />
      <ListWrapper />
    </div>
  );
};

export default Home;
