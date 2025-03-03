import React from "react";
import Timetable from "./Timetable";
import { Typography } from "@material-tailwind/react";
const ListWrapper = () => {
  return (
    <div className="flex flex-row md:p-7 flex-wrap  justify-evenly items-center gap-4">
      <div className=" flex-wrap gap-4 flex flex-col justify-center items-center ">
        <Typography className="font-main font-bold text-3xl">
          : قال القديس اغسطينس
        </Typography>
        <Typography className="font-main text-center w-60 text-xl text-wrap line-clamp-none font-medium">
          يا سر الإحسان يا سمة الوحدة يا وثاق المحبة! فمن أراد أن يحيا بك يغتنم
          الحياة فليقترب ويتناول هذا الجسد فيحيا.
        </Typography>
      </div>
      <Timetable />
    </div>
  );
};

export default ListWrapper;
