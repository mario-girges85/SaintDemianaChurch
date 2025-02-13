import React from "react";
import { Typography } from "@material-tailwind/react";
const HistoryOfTheChurch = () => {
  return (
    <div className="flex flex-row flex-wrap h-screen items-center justify-center gap-4">
      <div>
       iframe
      </div>
      <div className="mx-14 md:w-[50%] flex gap-3 flex-col" dir="rtl">
        <Typography className="font-main font-bold" variant="h2">
          كنيسة القديسة دميانة بالهرم
        </Typography>
        <Typography
          className="font-main  text-gray-700 leading-loose"
          variant="h5"
        >
          تُعد كنيسة القديسة دميانة بالهرم من المعالم الدينية البارزة في منطقة
          الهرم بمحافظة الجيزة. تم افتتاحها في 20 مايو 1970 على يد نيافة الأنبا
          دوماديوس، مطران الجيزة آنذاك، وبمشاركة نيافة الأنبا شنودة أسقف التعليم
          (الذي أصبح فيما بعد قداسة البابا شنودة الثالث) ونيافة الأنبا صموئيل
          أسقف الخدمات العامة والاجتماعية، بالإضافة إلى خمسة أساقفة آخرين. كانت
          الكنيسة في تصميمها الأصلي تُشبه نسخة مصغرة من الكاتدرائية الكبرى
          بالعباسية
        </Typography>
      </div>
    </div>
  );
};

export default HistoryOfTheChurch;
