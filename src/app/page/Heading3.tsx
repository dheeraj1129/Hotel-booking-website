import Link from "next/link";
import React from "react";

function Heading3() {
  return (
    <div className="justify-center items-center w-full h-1/2 bg-gray-200  flex flex-col main">
      <h3 className=" text-4xl font-bold text-white">
        Over 1000 Hotels and Resturent Across the Country
      </h3>

      {/* input? */}
      <div className=" h-12 grid grid-cols-7 my-5 mx-20">
        <input
          type="text"
          placeholder="Delhi"
          className="h-16 px-3 text-lg border-r-2 border-gray-300 col-span-2"
        />
        <input
          type="text"
          placeholder="Fri1 9, - Sat 22 Feb"
          className="h-16 px-3 text-lg border-r-2 border-gray-300 col-span-2"
        />
        <input
          type="text"
          placeholder="1 Room, 1 Guest"
          className="h-16 px-3 text-lg border-r-2 border-gray-300 col-span-2"
        />
        {/* button */}
        {/* button */}
        {/* button */}
        <Link href={"./hot"}>
          <button className="h-16 px-3 text-lg  bg-red-700 ">Search</button>
        </Link>
      </div>
      {/* new? */}
      <div className="flex px-4 m-4 text-white font-bold">
        <button className=" text-sm    py-2 px-3 mr-10 w-18 h-12">
          Continue for Search
        </button>
        <button className=" text-sm border-white border-2  py-2 px-3 mr-10 w-18 h-12">
          Delhi - 12 Feb - 19 March | Guests
        </button>
        <button className=" text-sm border-white border-2  py-2 px-3 mr-10 w-18 h-12">
          Us 90 1: Guest
        </button>
        <button className=" text-sm border-white border-2  py-2 px-3 mr-10 w-18 h-12">
          Delhi: 1 Guest
        </button>
      </div>
    </div>
  );
}

export default Heading3;
