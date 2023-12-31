import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  UserIcon,
  MenuIcon,
  PlusIcon,
  MinusIcon,
} from "../utils/icons";
import logo from "../assets/logo.webp";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../services/menu";
import HeaderSearch from "./HeaderSearch";
const InnerSubmenu = ({ title, address }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to={address}
      className="relative flex h-10"
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
    <>
      {!address ? (
        <div
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

          <p className="relative z-20 text-sm flex justify-between items-center px-5 w-full">
            {title} <ArrowRight />{" "}
          </p>

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
        </div>
      ) : (
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

          <p className="relative z-20 text-sm flex items-center  px-5">
            {title}
          </p>
        </Link>
      )}
    </>
  );
};

const Menu = ({ title, submenu, address, pathname }) => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);
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
const SubSideMenu = ({ title, sidemenu, address, pathname }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  if (sidemenu.length === 0) {
    return (
      <li className="h-16 flex items-center w-full border-b-1  border-dark-gray text-lg text-white hover:text-light-red transition-all duration-500">
        <Link
          to={address}
          onClick={() => {
            setOpen(false);
          }}
        >
          {title}
        </Link>
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
const SideMenu = ({ title, submenu, address, pathname }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  if (submenu.length === 0) {
    return (
      <li className="h-20 flex items-center  border-b-1  border-dark-gray w-full text-lg hover:text-light-red transition-all duration-500">
        <Link
          to={address}
          onClick={() => {
            setOpen(false);
          }}
        >
          {title}
        </Link>
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
          return (
            <SubSideMenu
              {...item}
              key={"subsidemenuitem" + item.title}
              pathname={pathname}
            />
          );
        })}
      </ul>
    </li>
  );
};

const Header = () => {
  const sideNav = useRef(null);
  const sideNavPaper = useRef(null);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setSideNavOpen(false);
  }, [pathname]);
  return (
    <div className="bg-black absolute z-50 w-full h-16 md:h-20 flex justify-center items-center px-5 sm:px-10 text-white">
      <div className="w-full h-full max-w-screen-2xl mx-auto flex items-center ">
        <img src={logo} alt="" className="w-36 sm:w-44" />
        <ul className="hidden lg:flex items-center justify-between  h-full w-[30rem]  ml-16 xl:ml-32">
          {menu.map((item, index) => {
            return (
              <Menu {...item} key={"itemheader" + index} pathname={pathname} />
            );
          })}
        </ul>
        <div className="flex gap-10 ml-auto items-center">
          <HeaderSearch />
          <Link
            to={"/login"}
            aria-label="navigate to account page"
            className="flex justify-center items-center h-full"
          >
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
              return (
                <SideMenu
                  {...item}
                  key={"sidenav-item" + item.title}
                  pathname={pathname}
                />
              );
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
  pathname: PropTypes.string,
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
  pathname: PropTypes.string,
};

export default Header;
