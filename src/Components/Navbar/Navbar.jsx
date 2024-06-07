import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pb-7">
      <div className="flex fixed z-50 bg-white w-[100%] items-center justify-center gap-96 h-24 ">
        <h1 className="flex text-[3rem]  lg:text-[3rem] md:text-[1.2rem] font-extrabold text-black ml-3">
          Zaph Tours
        </h1>
        <ul className="hidden md:flex lg:flex font-medium cursor-pointer text-black gap-9 animate-background from-pink-500 via-red-500 to-yellow-500  [animation-duration:_6s] hover:bg-gradient-to-r scroll-pr-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
