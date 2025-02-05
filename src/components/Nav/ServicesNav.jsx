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

function ServicesNav() {
  const nestedMenuItems_tarbia = [
    {
      title: "KG",
    },
    {
      title: "ابتدائي",
    },
    {
      title: " إعدادي بنين",
    },
    {
      title: "إعدادي بنات",
    },
    {
      title: "ثانوي بنين",
    },
    {
      title: "ثانوي بنات",
    },
    {
      title: "شباب",
    },
    {
      title: "خريجين",
    },
  ];
  const nestedMenuItems_khoras = [
    {
      title: "KG",
    },
    {
      title: "1&2 ابتدائي",
    },

    {
      title: "3&4 ابتدائي",
    },
    {
      title: "5&6 ابتدائي",
    },

    {
      title: "إعدادي",
    },
    {
      title: "ثانوي",
    },
    {
      title: "شباب",
    },
    {
      title: "خريجين",
    },
  ];
  const nestedMenuItems_others = [
    {
      title: "إجتماع سيدات",
    },
    {
      title: "إجتماع الاسرة",
    },
    {
      title: "إجتماع ادم للرجل",
    },
    {
      title: "اخوة الرب",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [openNestedMenu_tarbia, setopenNestedMenu_tarbia] =
    React.useState(false);
  const [openNestedMenu_khoras, setopenNestedMenu_khoras] =
    React.useState(false);
  const [openNestedMenu_others, setopenNestedMenu_others] =
    React.useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems_tarbia = nestedMenuItems_tarbia.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="font-main">{title}</MenuItem>
    </a>
  ));
  const renderItems_khoras = nestedMenuItems_khoras.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="font-main">{title}</MenuItem>
    </a>
  ));
  const renderItems_others = nestedMenuItems_others.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="font-main">{title}</MenuItem>
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
              className="flex  items-center font-main gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              خدمات
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden font-main h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 font-main transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden font-main rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu_tarbia}
            handler={setopenNestedMenu_tarbia}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                تربية كنسية
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems_tarbia}</MenuList>
          </Menu>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu_khoras}
            handler={setopenNestedMenu_khoras}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                خورس
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems_khoras}</MenuList>
          </Menu>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu_others}
            handler={setopenNestedMenu_others}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                أخري..
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems_others}</MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block lg:hidden font-main">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu_tarbia}
            handler={setopenNestedMenu_tarbia}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="font-main">
                تربية كنسية
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 font-main w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block font-main rounded-xl lg:hidden">
              {renderItems_tarbia}
            </MenuList>
          </Menu>

          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu_khoras}
            handler={setopenNestedMenu_khoras}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="font-main">
                خورس
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 font-main w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block font-main rounded-xl lg:hidden">
              {renderItems_khoras}
            </MenuList>
          </Menu>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
export default ServicesNav;
