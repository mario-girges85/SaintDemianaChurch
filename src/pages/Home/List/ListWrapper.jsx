import React from "react";
import Timetable from "./Timetable";
const ListWrapper = () => {
  return (
    <div className="flex flex-row flex-wrap  justify-evenly items-center gap-4">
      <Timetable />
      <Timetable />
      <Timetable />
      <Timetable />
    </div>
  );
};

export default ListWrapper;
