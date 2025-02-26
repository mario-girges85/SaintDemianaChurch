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
function Al7anNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
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
              مكتبة الالحان
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
          <MenuItem
            onClick={() => navigate("/Al7ansiamy")}
            className="font-main"
            dir="rtl"
          >
            {" "}
            الحن الصوم الكبير{" "}
          </MenuItem>
          <MenuItem className="font-main" dir="rtl">
            {" "}
            الحان سنوي{" "}
          </MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse dir=" rtl" open={isMobileMenuOpen}>
          <MenuItem
            onClick={() => navigate("/Al7ansiamy")}
            className="font-main"
          >
            {" "}
            الحان الصوم الكبير{" "}
          </MenuItem>
          <MenuItem className="font-main"> الحان سنوي </MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
export default Al7anNav;
