import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { CiDiscount1, CiGps } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
export default function Header() {
  const navData = [
    {
      id: 1,
      icon: <IoIosSearch size={20} />,
      title: "Search",
    },
    {
      id: 2,
      icon: <CiDiscount1 size={20} />,
      title: "Offers",
      sup: "New",
    },
    {
      id: 3,
      icon: <IoHelpBuoyOutline size={20}/>,
      title: "Help",
    },
    {
      id: 4,
      icon: <FaRegUser size={20}/>,
      title: "Sign In",
    },
    {
      id: 5,
      icon: <BsCartCheck  size={20}/>,
      title: "Cart",
    },
  ];
  const [toggle, setToggle] = useState(false);

  function showSideMenu() {
    setToggle(true);
  }
  function hideSideMenu() {
    setToggle(false);
  }

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-50"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[250px] md:w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="flex flex-col gap-10 justify-center items-center mt-20">
            <input
              className="p-2 md:p-4 text-[#282c3f] cursor-pointer w-[200px] md:w-[400px] outline-none border border-1 focus:shadow-md placeholder:font-bold placeholder:text-xs md:placeholder:text-lg"
              type="text"
              placeholder="Search for area, street name..."
              required
            />
            <button className="flex gap-2 md:gap-5 p-4 md:p-10 cursor-pointer text-[#282c3f] w-[200px] md:w-[400px] outline-none border border-1 focus:shadow-md">
              <CiGps size={25} />
              <p className="font-bold flex flex-col text-sm md:text-lg">
                Get current location{" "}
                <span className="text-slate-300 text-left font-semibold">
                  Using GPS
                </span>{" "}
              </p>
            </button>
          </div>
        </div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-40">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[50px] md:w-[100px]">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm lg:text-lg font-bold border-b-[2px] xl:border-b-[3px] border-black">
              Sri Satya Complex
            </span>
            Visakhapatnam, India
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="hidden lg:flex list-none gap-5 xl:gap-10 ml-auto text-[9px] lg:text-[18px] font-semibold">
            {navData.map(({ id, icon, title, sup }) => (
              <li
                key={id}
                className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]"
              >
                {icon}
                {title}
                <sup>{sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
