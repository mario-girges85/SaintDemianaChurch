import React from "react";
import Lottie from "lottie-react";
import schedual from "../../../assets/Lotties/Clock.json";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
const Timetable = () => {
  const navigate = useNavigate("");
  return (
    <div>
      <div className="mt-4 flex flex-wrap justify-center items-center flex-row mx-[10%]">
        {/* container */}
        <div>
          {/* lottie */}
          <Lottie
            animationData={schedual}
            loop={true}
            autoplay={true}
            speed={0.5}
            className="w-[90%] lg:w-[350px]"
          />
        </div>
        <div className="flex  md:text-2xl flex-col justify-center items-center gap-3">
          <h1 className=" text-lg md:text-xl font-main font-bold">
            مواعيد القداسات
          </h1>
          <h1 className="font-main font-medium md:w-48 text-center text-gray-500">
            تعرف علي مواعيد جميع القداسات علي مدار الاسبوع
          </h1>
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
