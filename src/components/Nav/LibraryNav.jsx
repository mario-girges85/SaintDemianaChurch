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

function LibraryNav() {
  const navigate = useNavigate();
  const nestedMenuItems_al7an = [
    {
      title: "الحان تسبحة",
    },
    {
      title: "الحان مناسبات و اعياد",
    },
    {
      title: "الحان ستوي",
    },
    {
      title: "الحان الصوم الكبير", // Add the new item here
      link: "/al7anLibrary", // Add the link for navigation
    },
  ];
  const nestedMenuItems_books = [
    {
      title: "ابائيات",
    },
    {
      title: "اعداد خدام",
    },
    {
      title: "دفاع",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [openNestedMenu_al7an, setopenNestedMenu_al7an] = React.useState(false);
  const [openNestedMenu_books, setopenNestedMenu_books] = React.useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems_al7an = nestedMenuItems_al7an.map(
    ({ title, link }, key) => (
      <a href={link || "#"} key={key} onClick={() => link && navigate(link)}>
        <MenuItem>{title}</MenuItem>
      </a>
    )
  );

  const renderItems_books = nestedMenuItems_books.map(({ title }, key) => (
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
              مكتبات
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden font-main h-3 w-3 transition-transform lg:block ${
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
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            direction="rtl"
            offset={15}
            open={openNestedMenu_al7an}
            handler={setopenNestedMenu_al7an}
          >
            <MenuHandler className="flex font-main items-center justify-between">
              <MenuItem>
                مكتبة الالحان
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="font-main rounded-xl">
              {renderItems_al7an}
            </MenuList>
          </Menu>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu_books}
            handler={setopenNestedMenu_books}
          >
            <MenuHandler className="flex font-main items-center justify-between">
              <MenuItem>
                مكتبة الكتب
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="font-main rounded-xl">
              {renderItems_books}
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block font-main lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu_al7an}
            handler={setopenNestedMenu_al7an}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                مكتبة الالحان
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block font-main rounded-xl lg:hidden">
              {renderItems_al7an}
            </MenuList>
          </Menu>

          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu_books}
            handler={setopenNestedMenu_books}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                مكتبة الكتب
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block font-main rounded-xl lg:hidden">
              {renderItems_books}
            </MenuList>
          </Menu>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
export default LibraryNav;
