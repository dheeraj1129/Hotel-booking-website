import React from "react";
import { FaFire } from "react-icons/fa";

function Header4() {
  return (
    <div className="my-14 flex w-full justify-center items-center">
      <div className=" flex justify-around bg-red-200 py-4 w-5/6  h-28 items-center ">
        <div className="flex">
          <h2 className="text-4xl">{<FaFire />}</h2>
          <div className="flex flex-col px-4">
            <h2 className="font-extrabold text-lg">
              Get Access To The Excutive Deal
            </h2>
            <p className="font-extralight">
              {" "}
              Only best deal reach in index box
            </p>
          </div>{" "}
        </div>

        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="e.g, @gmail.com"
            className="h- 12 px-3 py-4 border-gray-50 border-2 rounded-md"
          />
          <button className="  font-extrabold  text-white px-3 py-4 bg-red-500 border-2 rounded-md ml-4">
            Nodify me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header4;
