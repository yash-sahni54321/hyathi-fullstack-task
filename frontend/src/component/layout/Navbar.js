import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  let Links = [
    { label: "Home", to: "/" },
    { label: "MyProfile", to: "/profile" },
    { label: "Login", to: "/login" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <span>Pokemon</span>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <HiX /> : <HiMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          } `}
        >
          {Links.slice(0, isAuthenticated ? 2 : 3).map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.to}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
