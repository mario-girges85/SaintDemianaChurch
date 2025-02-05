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
function ArticlesNav() {
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
              اخبار و مقالات
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
            <MenuList className="font-main rounded-xl">{renderItems}</MenuList>
          </Menu>
          <MenuItem className="font-main" dir="rtl">
            {" "}
            اخبار{" "}
          </MenuItem>
          <MenuItem className="font-main" dir="rtl">
            {" "}
            مقالات{" "}
          </MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
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
          <MenuItem className="font-main"> اخبار </MenuItem>
          <MenuItem className="font-main"> مقالات </MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
export default ArticlesNav;
