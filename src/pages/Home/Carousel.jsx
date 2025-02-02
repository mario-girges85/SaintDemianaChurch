import { Carousel } from "@material-tailwind/react";
// import type { CarouselProps } from "@material-tailwind/react";
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="w-[90%] md:w-[50%]"
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50  flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCD2ASAXY7ThWs-zNrC3yya11sFcBUNMGig&s"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScea392uD5CeMStEfzOIWKmnUzf8oeiu3qzQ&s"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVMMTg32ehqqJ8qqK7SHdzcSRhlz17lZCWKDMAPSVSjPao_Q-VgDwnQcuIcIgkrPOL1Q&usqp=CAU"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
export default CarouselCustomNavigation;
