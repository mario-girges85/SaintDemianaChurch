import Carousel from "./Carousel";
import React from "react";
import bgimg from "../../assets/Homechurch.jpg";

const Home = () => {
  return (
    <div>
      <div className=" md:flex-row-reverse flex flex-wrap justify-center items-center gap-7 m-4">
        <h1 className="text-3xl leading-10  md:4xl lg:text-5xl w-full md:w-[40%] text-center font-bold text-deep-orange-900">
          الصفحة الرسمية و الوحيدة لكنيسة القديسة دميانة بالهرم
        </h1>
        <Carousel className="w-[90%] md:w-[50%]" />
      </div>
    </div>
  );
};

export default Home;
