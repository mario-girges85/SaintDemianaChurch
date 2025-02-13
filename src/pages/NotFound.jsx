import React from "react";
import { Typography } from "@material-tailwind/react";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Typography className="font-main font-bold text-3xl text-gray-800">
        Page Not Found
      </Typography>
    </div>
  );
};

export default NotFound;
