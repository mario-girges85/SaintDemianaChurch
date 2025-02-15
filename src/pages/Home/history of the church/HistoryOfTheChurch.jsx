import { Typography } from "@material-tailwind/react";

const HistoryOfTheChurch = () => {
  return (
    <div
      className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center px-4 lg:px-24 py-8 mb-12"
      dir="rtl"
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full lg:w-[40%]">
        <Typography
          variant="h3"
          className="font-main font-bold text-center text-2xl lg:text-3xl"
          dir="rtl"
        >
          تاريخ كنيسة القديسة دميانة بالهرم
        </Typography>

        <Typography
          variant="paragraph"
          className="font-main text-center text-sm lg:text-base lg:w-[80%] leading-relaxed text-gray-700"
          dir="rtl"
        >
          تُعد كنيسة القديسة دميانة بالهرم من المعالم الدينية البارزة في منطقة
          الهرم بمحافظة الجيزة. تم افتتاحها في 20 مايو 1970 على يد نيافة الأنبا
          دوماديوس، مطران الجيزة آنذاك، وبمشاركة نيافة الأنبا شنودة أسقف التعليم
          (الذي أصبح فيما بعد قداسة البابا شنودة الثالث) ونيافة الأنبا صموئيل
          أسقف الخدمات العامة والاجتماعية، بالإضافة إلى خمسة أساقفة آخرين. كانت
          الكنيسة في تصميمها الأصلي تُشبه نسخة مصغرة من الكاتدرائية الكبرى
          بالعباسية.
        </Typography>
      </div>
      <div className="w-full lg:w-[40%] aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/q9JnFXcVSno"
          title="تاريخ كنيسة القديسة دميانة بالهرم"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HistoryOfTheChurch;
