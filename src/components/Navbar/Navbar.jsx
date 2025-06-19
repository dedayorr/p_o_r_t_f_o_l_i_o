import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const openSideBar = () => {
    setNavOpen(true);
  };

  const closeSideBAr = () => {
    setNavOpen(false);
  };

  return (
    <>
      {navOpen && (
        <div className="sidebar bg-white h-screen sticky top-0 w-full z-50 animate-in pt-[10%]">
          <div className="flex p-[8px] justify-between px-[16px] items-center h-[70px] pb-[]">
            <a href="/">
              {" "}
              {/* <div className="text-bgColor1 cursive font-extrabold text-[27px] underline">
                ADEYEYE
              </div> */}
                <img
                  className="rounded-[10px] h-[80px] w-[70px]"
                  src="./EA-logo1.png"
                  alt="project-one"
                />
            </a>

            <IoCloseSharp
              className="text-[30px] w-[40px] text-bgColor1"
              onClick={closeSideBAr}
            />
          </div>

          <div className="mt-[15%]">
            {" "}
            <ul className="text-bgColor1 w-[90%] mx-auto flex flex-col ">
              <li
                onClick={closeSideBAr}
                className=" flex items-center text-[25px] mt-[%] gap-[10%] "
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <a href="#skills"> Skills</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <a href="#experience">Experience</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <a href="#work">Work</a>
              </li>
              <li
                onClick={closeSideBAr}
                className="flex items-center text-[25px] mt-[10%] gap-[10%] "
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="sticky top-0 z-40 bg-bgColor1 h-[150px] flex justify-between px-[16px] items-center md:mx-[5%] lg:pt-[3%] lg:h-[200px]">
        {/* <div className="text-white cursive font-extrabold text-[27px] underline lg:text-[45px]">
          ADEYEYE
        </div> */}
         <img
                  className="rounded-[10px] h-[100px] w-[90px] lg:w-[130px] lg:h-[140px]"
                  src="./logo192.png"
                  alt="project-one"
                />
        <GiHamburgerMenu
          onClick={openSideBar}
          className="text-textColor h-[30px] w-[30px] md:hidden"
        />
        <ul className="text-textColor hidden md:flex gap-[30px]">
          <li className=" flex items-center text-[25px]  hover:underline">
            <a href="#about">About</a>
          </li>
          <li onClick={closeSideBAr} className="flex items-center text-[25px] hover:underline">
            <a href="#skills"> Skills</a>
          </li>
          <li onClick={closeSideBAr} className="flex items-center text-[25px] hover:underline">
            <a href="#experience">Experience</a>
          </li>
          <li onClick={closeSideBAr} className="flex items-center text-[25px] hover:underline">
            <a href="#work">Work</a>
          </li>
          <li onClick={closeSideBAr} className="flex items-center text-[25px] hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
