import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function FatherCard({ father }) {
  // console.log(father);

  return (
    <Card dir="rtl" className="mt-6 w-64">
      <CardHeader color="blue-gray" className="relative -w-56 h-56">
        <img
          src={father?.img}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-main">
          {father?.name}
        </Typography>
        <Typography className="font-semibold font-main">
          تاريخ الرسامة :
        </Typography>
        <Typography className=" font-main">{father?.date}</Typography>
      </CardBody>
    </Card>
  );
}
export default FatherCard;
