import React from "react";
import Timetable from "./ads/Timetable";
import Carousel from "./Carousel/Carousel";
import Navbar from "../../components/Nav/Navbar";
const Home = () => {
  return (
    <div className="   m-auto">
      <Carousel />
      <Timetable />

      <div className="youtube-video">
        <iframe
          allowFullScreen
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U7uKo1W6hC4?si=lU_CRc6j8z6EgyB_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
