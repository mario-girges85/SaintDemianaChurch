import React from "react";
import FatherCard from "./FatherCard";
import fr_loka from "../../../assets/images/fathers/fr_loka.jpg";
import fr_bemen from "../../../assets/images/fathers/fr_bemen.jpg";
import fr_botros from "../../../assets/images/fathers/fr-botros.jpg";
import fr_mousa from "../../../assets/images/fathers/fr_mousa.jpg";
import fr_sharobem from "../../../assets/images/fathers/fr_sharobem.jpg";
const Fathers = () => {
  const fathersData = [
    { name: "القمص لوقا جورجي", date: "24 مارس 1989 م", img: fr_loka },
    { name: "القمص بيمن شنوده", date: "13 فبراير 1999 م", img: fr_bemen },
    { name: "القمص بطرس عماد", date: "28 يوليو 1991 م", img: fr_botros },
    { name: "القمص موسي ليون", date: "27 فبراير 2006 م", img: fr_mousa },
    { name: "القس شاروبيم ظريف", date: "unknown", img: fr_sharobem },
  ];

  return (
    <div className="my-5 md:my-12 lg:my-[20vh] flex flex-row flex-wrap justify-center items-center gap-7">
      {fathersData.map((father, index) => (
        <FatherCard key={index} father={father} />
      ))}
    </div>
  );
};

export default Fathers;
