import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="fixed z-50 w-full bg-white border-b-2 border-indigo-500">
        <div className="flex items-center gap-96 justify-center h-24 px-4">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-black">
            Zaph Tours
          </h1>
          <ul className="hidden md:flex font-medium cursor-pointer text-black gap-9">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/destinations">Destinations</Link>
            </li>
            <li className="hover:underline">
              <Link to="/packages">Packages</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div onClick={handleNav} className="md:hidden">
            {showMenu ? (
              <AiOutlineClose size={30} className="text-black" />
            ) : (
              <AiOutlineMenu size={30} className="text-black" />
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <ul
          className={`${
            showMenu ? "block" : "hidden"
          } absolute top-24 left-0 w-full bg-white z-50 md:hidden`}>
          <li className="text-center py-2 border-b">
            <Link to="/" onClick={() => setShowMenu(false)}>
              Home
            </Link>
          </li>
          <li className="text-center py-2 border-b">
            <Link to="/destinations" onClick={() => setShowMenu(false)}>
              Destinations
            </Link>
          </li>
          <li className="text-center py-2 border-b">
            <Link to="/packages" onClick={() => setShowMenu(false)}>
              Packages
            </Link>
          </li>
          <li className="text-center py-2">
            <Link to="/contacts" onClick={() => setShowMenu(false)}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
