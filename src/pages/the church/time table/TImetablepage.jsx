import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex justify-center items-center flex-col">
      <Typography className="font-main font-semibold text-2xl my-9 text-center">
        مواعيد القداسات خلال الصوم الكبير عام 2025
      </Typography>
      <div dir="rtl" className="max-w-7xl min-h-96 mx-auto  px-4 w-[80%]">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader className="font-main" onClick={() => handleOpen(1)}>
            الجمعه
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              7:00ص الي 10:30ص
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
          <AccordionBody>
            <Typography className="font-main font-semibold">
              7:00ص الي 9:30ص
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح الانبا كاراس (خاص بإبتدائي فقط)
            </Typography>
          </AccordionBody>

          <AccordionBody>
            <Typography className="font-main font-semibold ">
              7:00ص الي 9:30ص
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسين مكسيموس و دوماديوس (خاص بالأمهات فقط)
            </Typography>
          </AccordionBody>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              1:00ظ الي 3:00ظ
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح يوسف النجار بالكنيسة الكبيرة
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader className="font-main " onClick={() => handleOpen(2)}>
            السبت
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              7:00ص الي 9:30ص
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader className="font-main" onClick={() => handleOpen(3)}>
            الاحد
          </AccordionHeader>

          <AccordionBody>
            <Typography className="font-main font-semibold ">
              6:00ص الي 8:30ص
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              8:30ص الي 11:30ص
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح يوسف النجار
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader className="font-main" onClick={() => handleOpen(4)}>
            الاثنين
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              11:00ص الي 2:00م
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader className="font-main" onClick={() => handleOpen(5)}>
            الثلاثاء
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              11:00ص الي 2:00م
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader className="font-main" onClick={() => handleOpen(6)}>
            الاربعاء
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              9:00ص الي 12:00ظ
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              12:00ظ الي 3:00ظ
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح يوسف النجار
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
          <AccordionHeader className="font-main" onClick={() => handleOpen(7)}>
            الخميس
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-main font-semibold ">
              11:00ص الي 2:00ظ
            </Typography>
            <Typography className="font-main mb-2">
              علي مذبح القديسة دميانة
            </Typography>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
export default AccordionCustomIcon;
