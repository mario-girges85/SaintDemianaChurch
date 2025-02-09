import React from "react";
import {
  Navbar,
  Collapse,
  Avatar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Input,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import ChurchNav from "./ChurchNav";
import ServicesNav from "./ServicesNav";
import LibraryNav from "./LibraryNav";
import ArticlesNav from "./ArticlesNav";
import { Navigate, useNavigate } from "react-router";

function NavList() {
  const navigate = useNavigate();
  return (
    <List
      dir="rtl"
      className="  mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1"
    >
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium font-main"
        onClick={() => navigate("/")}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          الرئيسية
        </ListItem>
      </Typography>
      <ChurchNav />
      <ServicesNav />
      <ArticlesNav />
      <LibraryNav />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center font-main gap-2 py-2 pr-4">
          تواصل معنا
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navigate = useNavigate();
  return (
    <Navbar dir="rtl" className="mx-auto bg-white   shadow-none  px-4 py-2">
      <div className="flex  items-center  justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="  flex gap-2 justify-center items-center cursor-pointer py-1.5 lg:ml-2"
          onClick={() => navigate("/")}
        >
          <Avatar src={logo} alt="avatar" />
          <Typography className="font-bold ">
            {" "}
            كنيسة القديسة دميانة بالهرم
          </Typography>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <div dir="ltr" className="w-72">
            <Input dir="rtl" label="Search" />
          </div>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <div dir="ltr" className="w-72">
            <Input dir="rtl" label="Search" />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
export default NavigationbarWithDropdownMultilevelMenu;
