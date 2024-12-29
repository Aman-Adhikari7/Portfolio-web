import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <div className="flex p-10  shadow-sm  px-20 justify-between xl:justify-between items-center ">
      <h1 className="text-2xl md:text-4xl font-sans-serif">Aman Adhikari</h1>
      <div
        className=""
        onClick={() => {
          settoggle(!toggle);
        }}
      >
        {toggle === true ? (
          <HiBars3 className="text-6xl p-1 cursor-pointer xl:hidden " />
        ) : (
          <RxCross1 className=" cursor-pointer text-6xl  p-1 hover:text-red-500 xl:hidden  " />
        )}

        {toggle === false ? (
          <div className="flex xl:hidden flex-col justify-between font-poppins  text-2xl absolute opacity-75 bg-white shadow-lg p-4 pt-8 right-[84px] top-12">
            <h1 className="py-2 hover:text-red-700  ">
              <a href="#about">About</a>
            </h1>
            <h1 className="py-2 hover:text-red-700">
              <a href="#Experience">Experience</a>
            </h1>
            <h1 className="py-2 hover:text-red-700 ">
              <a href="#Project"> Project</a>
            </h1>
            <h1 className="py-2 hover:text-red-700">
              <a href="#Contact">Contact</a>
            </h1>
          </div>
        ) : (
          <div></div>
        )}

        <div className=" xl:flex hidden">
          <h1 className="mr-20 text-2xl hover:text-red-700 font-poppins">
            <a href="#about">About</a>
          </h1>
          <h1 className="mr-20 text-2xl hover:text-red-700 font-poppins">
            <a href="#Experience">Experience</a>
          </h1>
          <h1 className="mr-20 text-2xl hover:text-red-700 font-poppins">
            <a href="#Project"> Project</a>
          </h1>
          <h1 className=" text-2xl font-poppins hover:text-red-700">
            <a href="#Contact">Contact</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
