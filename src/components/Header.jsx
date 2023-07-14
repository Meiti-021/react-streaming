import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  SearchIcon,
  UserIcon,
  MenuIcon,
  PlusIcon,
  MinusIcon,
} from "../utils/icons";
import logo from "../assets/logo.webp";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { menu } from "../services/menu";
const InnerSubmenu = ({ title, address }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to={address}
      className="relative flex h-10 "
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div
        className={`absolute h-full z-10 bg-gradient-to-r from-dark-red to-black transition-all duration-500 ${
          isHover ? "w-full" : "w-0"
        }`}
      ></div>
      <span
        className={`h-full relative transition-all duration-500 z-20  bg-light-red ${
          isHover ? "w-1" : "w-0"
        }`}
      ></span>
      <p className="relative z-20 text-sm flex items-center px-5">{title}</p>
    </Link>
  );
};

const Submenu = ({ address, title, sidemenu }) => {
  const [isHover, setIsHover] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Link
      to={address}
      className="relative flex h-10 "
      onMouseEnter={() => {
        setIsHover(true);
        setOpenMenu(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
        setOpenMenu(false);
      }}
    >
      <div
        className={`absolute h-full z-10 bg-gradient-to-r from-dark-red to-black transition-all duration-500 ${
          isHover ? "w-full" : "w-0"
        }`}
      ></div>
      <span
        className={`h-full relative transition-all duration-500 z-20  bg-light-red ${
          isHover ? "w-1" : "w-0"
        }`}
      ></span>
      {sidemenu.length === 0 ? (
        <p className="relative z-20 text-sm flex items-center  px-5">{title}</p>
      ) : (
        <p className="relative z-20 text-sm flex justify-between items-center px-5 w-full">
          {title} <ArrowRight />{" "}
        </p>
      )}
      {sidemenu.length ? (
        <ul
          className={`w-72 transition-all border-1 border-dark-gray flex flex-col gap-2  h-auto absolute left-full bg-black p-4 duration-500 top-18 rounded-sm ${
            openMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {sidemenu.map((list, index) => {
            return (
              <InnerSubmenu
                {...list}
                key={"submenuitem" + index + list.address}
              />
            );
          })}
        </ul>
      ) : undefined}
    </Link>
  );
};

const Menu = ({ title, submenu, address }) => {
  const [openMenu, setOpenMenu] = useState(false);
  if (submenu.length === 0) {
    return (
      <li className="relative cursor-pointer transition-all h-full">
        <Link
          to={address}
          className="flex gap-1 text-sm font-semibold hover:text-light-red p-4 duration-500 items-center h-full "
        >
          {title}
        </Link>
      </li>
    );
  }
  return (
    <li
      className="relative cursor-pointer transition-all h-full"
      onMouseEnter={() => {
        setOpenMenu(true);
      }}
      onMouseLeave={() => {
        setOpenMenu(false);
      }}
    >
      <p className="flex gap-1 text-sm  font-semibold hover:text-light-red duration-500 items-center h-full ">
        {title}
        <ArrowDown />
      </p>
      <ul
        className={`w-72 py-7 transition-all flex flex-col gap-2  h-auto absolute bg-black p-4 duration-500 top-18 rounded-sm ${
          openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {submenu.map((list, index) => {
          return <Submenu {...list} key={list.title + list.address + index} />;
        })}
      </ul>
    </li>
  );
};

const InnerSubSideMenu = ({ title, address }) => {
  return (
    <li className="h-16 flex items-center w-full border-b-1  border-dark-gray text-lg text-white hover:text-light-red transition-all duration-500">
      <Link to={address}>{title}</Link>
    </li>
  );
};
const SubSideMenu = ({ title, sidemenu, address }) => {
  const [open, setOpen] = useState(false);
  if (sidemenu.length === 0) {
    return (
      <li className="h-16 flex items-center w-full border-b-1  border-dark-gray text-lg text-white hover:text-light-red transition-all duration-500">
        <Link to={address}>{title}</Link>
      </li>
    );
  }
  return (
    <li
      className={`relative ${
        open ? "h-auto" : "h-16"
      } w-full border-b-1 text-white  overflow-hidden border-dark-gray text-lg hover:text-light-red transition-all duration-500`}
    >
      <div className="w-full  h-16 flex justify-between items-center">
        {title}
        <button
          className="w-6 h-6 flex justify-center items-center  text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
      <ul className="p-5">
        {sidemenu.map((item) => {
          return (
            <InnerSubSideMenu {...item} key={"innersidenavitem" + item.title} />
          );
        })}
      </ul>
    </li>
  );
};
const SideMenu = ({ title, submenu, address }) => {
  const [open, setOpen] = useState(false);
  if (submenu.length === 0) {
    return (
      <li className="h-20 flex items-center  border-b-1  border-dark-gray w-full text-lg hover:text-light-red transition-all duration-500">
        <Link to={address}>{title}</Link>
      </li>
    );
  }
  return (
    <li
      className={`relative ${
        open ? "h-auto" : "h-20"
      } w-full border-b-1  overflow-hidden border-dark-gray text-lg hover:text-light-red transition-all duration-500`}
    >
      <div className="w-full  h-20 flex justify-between items-center">
        {title}
        <button
          className="w-6 h-6 flex justify-center items-center bg-light-red text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <MinusIcon className={"w-4 h-4"} />
          ) : (
            <PlusIcon className={"w-4 h-4"} />
          )}
        </button>
      </div>
      <ul className="p-5">
        {submenu.map((item) => {
          return <SubSideMenu {...item} key={"subsidemenuitem" + item.title} />;
        })}
      </ul>
    </li>
  );
};

const Header = () => {
  const sideNav = useRef(null);
  const sideNavPaper = useRef(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <div className="bg-black absolute z-50 w-full h-16 md:h-20 flex justify-center items-center px-5 sm:px-10 text-white">
      <div className="w-full h-full max-w-screen-2xl mx-auto flex items-center ">
        <img src={logo} alt="" className="w-36 sm:w-44" />
        <ul className="hidden lg:flex items-center justify-between  h-full w-[30rem]  ml-16 xl:ml-32">
          {menu.map((item, index) => {
            return <Menu {...item} key={"itemheader" + index} />;
          })}
        </ul>
        <div className="flex gap-10 ml-auto items-center">
          <div className="flex">
            <input
              type="text"
              className={`transition-all duration-300 mr-4 h-8 bg-black  text-gray ${
                searchOpen ? "w-44 rounded-2xl px-5" : "w-0"
              }`}
              placeholder="Search..."
            />
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
              }}
              aria-label="open search input"
            >
              <SearchIcon className={"h-5 w-5"} />
            </button>
          </div>
          <Link to={"/login"} aria-label="navigate to account page">
            <UserIcon className={"h-5 w-5"} />
          </Link>
          <button
            className="lg:hidden "
            onClick={() => setSideNavOpen(true)}
            aria-label="open side nav"
          >
            <MenuIcon className={"h-7 w-7"} />
          </button>
        </div>
      </div>
      <div
        className={`w-full  transition-all duration-500 min-h-screen top-0 fixed ${
          sideNavOpen ? "left-0" : "-left-full"
        }`}
        ref={sideNavPaper}
        onClick={(e) => {
          if (sideNavOpen === true && e.target === sideNavPaper.current) {
            setSideNavOpen(false);
          }
        }}
      >
        <div
          className={`absolute px-10 overflow-y-auto py-20 transition-all duration-500 h-full top-0  w-10/12 bg-black ${
            sideNavOpen ? "left-0" : "-left-full"
          }`}
          ref={sideNav}
        >
          <ul className="flex flex-col ">
            {menu.map((item) => {
              return <SideMenu {...item} key={"sidenav-item" + item.title} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
InnerSubSideMenu.propTypes = InnerSubmenu.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
};
SideMenu.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  submenu: PropTypes.array,
};
SubSideMenu.propTypes = Submenu.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  sidemenu: PropTypes.array,
};

Menu.propTypes = {
  title: PropTypes.string,
  submenu: PropTypes.array,
  address: PropTypes.string,
};

export default Header;
