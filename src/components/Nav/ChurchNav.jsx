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
import { useNavigate } from "react-router";
function ChurchNav() {
  const nestedMenuItems = [
    {
      title: "Hero",
    },
    {
      title: "Features",
    },
    {
      title: "Testimonials",
    },
    {
      title: "Ecommerce",
    },
  ];
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex font-main items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              الكنيسة
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden  h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList dir=" rtl" className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>
          <MenuItem className="font-main" dir="rtl">
            المناسبات الكنسية
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/saintdemiana")}
            className="font-main"
            dir="rtl"
          >
            الشهيدة دميانه شفيعة الكنيسة
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/historyofthechurch")}
            className="font-main"
            dir="rtl"
          >
            تاريخ الكنيسة
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/fathers")}
            className="font-main"
            dir="rtl"
          >
            أباء الكنيسة
          </MenuItem>
          <MenuItem
            className="font-main"
            onClick={() => navigate("/timetablepage")}
            dir="rtl"
          >
            {" "}
            مواعيد الصلوات
          </MenuItem>
          dir=" rtl"
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse dir=" rtl" open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem className="font-main">المناسبات الكنسية</MenuItem>
          <MenuItem
            onClick={() => navigate("/saintdemiana")}
            className="font-main"
          >
            الشهيدة دميانه شفيعة الكنيسة
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/historyofthechurch")}
            className="font-main"
          >
            تاريخ الكنيسة
          </MenuItem>
          <MenuItem onClick={() => navigate("/fathers")} className="font-main">
            أباء الكنيسة
          </MenuItem>
          <MenuItem
            className="font-main"
            onClick={() => navigate("/timetablepage")}
          >
            {" "}
            مواعيد الصلوات
          </MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
export default ChurchNav;
