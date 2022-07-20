import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);

  const clickHandler = () => {
    setIsNav((prevState) => {
      return !prevState;
    });
    console.log(isNav);
  };

  return (
    <nav className="w-full bg-[#023E8A] flex items-center h-[70px]">
      {!isNav && (
        <FaBars
          color="white"
          size="30"
          className="cursor-pointer ml-4"
          onClick={clickHandler}
        />
      )}

      {isNav && (
        <div className="absolute inset-0 bg-[#023E8A] flex justify-end items-end flex-col z-10">
          <IoIosClose
            onClick={clickHandler}
            className="mr-2 cursor-pointer"
            color="white"
            size="50"
          />
          <ul className="relative h-[97%] flex flex-col justify-center items-center m-0 self-center text-white font-bold text-3xl">
            <li className="py-4 cursor-pointer">Monday</li>
            <li className="py-4 cursor-pointer">Tuesday</li>
            <li className="py-4 cursor-pointer">Wednesday</li>
            <li className="py-4 cursor-pointer">Thurdsday</li>
            <li className="py-4 cursor-pointer">Friday</li>
            <li className="py-4 cursor-pointer">Saturday</li>
            <li className="py-4 cursor-pointer">Sunday</li>
          </ul>
          <button className="text-white flex items-center text-xl font-bold mr-4 mb-4 cursor-pointer">
            Log Out <FiLogOut className="ml-2" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
