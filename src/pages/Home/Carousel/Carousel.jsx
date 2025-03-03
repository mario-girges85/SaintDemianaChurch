import {
  Carousel,
  Typography,
  Button,
  Spinner,
} from "@material-tailwind/react";
import khoras from "../../../assets/images/khoras2.jpg";
import saintDemiana from "../../../assets/images/saint demiana.jpg";
import fathers from "../../../assets/images/fathers2.jpg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
export function CarouselWithContent() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 500); // Delay for visibility
  }, []);
  return (
    <div className="mx-4 md:mx-12 ">
      <Carousel
        className={`h-[90vh] transition-transform rounded-xl duration-700 ease-in-out  ${
          showPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
        loop={true}
        autoplay={true}
      >
        {/* fathers */}
        <div dir="rtl" className="relative h-full w-full">
          <img
            src={fathers}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-main text-3xl md:text-4xl lg:text-5xl"
              >
                آباء كنسية القديسة دميانة بالهرم
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 font-main"
              >
                "كَهَنَتُكَ يَلْبَسُونَ الْبِرَّ، وَأَتْقِيَاؤُكَ يَهْتِفُونَ"
                (سفر المزامير 132: 9)
              </Typography>
              <div className="flex justify-center gap-2">
                <Button
                  size="lg"
                  onClick={() => navigate("/fathers")}
                  className="font-main"
                  color="white"
                >
                  اعرف المزيد
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* the history of the church */}
        <div dir="rtl" className="relative h-full w-full">
          <img
            src={khoras}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pr-12 md:w-2/4 md:pr-20 lg:pr-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-main text-3xl md:text-4xl lg:text-5xl"
              >
                كنسية القديسة دميانة بالهرم
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 font-main opacity-80"
              >
                الموقع الرسمي و الوحيد لكنيسة القديسة دميانة بالهرم
              </Typography>
              <div className="flex gap-2">
                <Button
                  onClick={() => navigate("/historyofthechurch")}
                  className="font-main"
                  size="lg"
                  color="white"
                >
                  تاريخ الكنيسة
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* saint demiana */}
        <div dir="rtl" className="relative h-full w-full">
          <img
            src={saintDemiana}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pr-12 pb-12 md:w-2/4 md:pr-20 md:pb-20 lg:pr-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-main text-3xl md:text-4xl lg:text-5xl"
              >
                سيرة القديسة دميانة
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 font-main opacity-80"
              >
                وُلدت من أبوين مسيحيين تقيين في أواخر القرن الثالث، كان أبوها
                مرقس واليًا على البرلس والزعفران بوادي السيسبان. إذ بلغت العام
                الأول من عمرها تعمدت في دير الميمة جنوب مدينة الزعفران، وأقام
                والدها مأدبة فاخرة للفقراء والمحتاجين لمدة ثلاثة أيام، بعد فترة
                انتقلت والدتها.
              </Typography>
              <div className="flex font-main gap-2">
                <Button
                  size="lg"
                  onClick={() => navigate("/saintdemiana")}
                  className="font-main"
                  color="white"
                >
                  اعرف المزيد
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default CarouselWithContent;
