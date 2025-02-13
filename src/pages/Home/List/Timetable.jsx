import React, { useState } from "react";
import Lottie from "lottie-react";
import schedual from "../../../assets/Lotties/Clock.json";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const Timetable = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mt-4 w-64  flex  flex-col items-center "
    >
      {/* Lottie Animation */}
      <Lottie
        autoPlay={false}
        loop={false}
        animationData={schedual}
        className="w-64"
      />

      <div className="flex w-72 flex-col items-center gap-3">
        <h1 className="text-lg font-main font-bold">مواعيد القداسات</h1>
        <p className="font-main w-52 font-medium text-center text-gray-500">
          تعرف علي مواعيد جميع القداسات علي مدار الاسبوع
        </p>

        {/* Animated Button */}
        <div
          className={`transition-all  duration-300 transform ${
            hovered
              ? "lg:opacity-100 lg:scale-100 lg:block"
              : "lg:opacity-0 lg:scale-90 lg:invisible"
          }`}
        >
          <Button
            onClick={() => navigate("/timetablepage")}
            className="font-main mt-2"
          >
            اعرف المزيد
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
