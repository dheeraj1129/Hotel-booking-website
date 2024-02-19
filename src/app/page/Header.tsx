import { PiShoppingBagOpenBold } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import Block from "./Block";

import React from "react";

const Header = () => {
  return (
    <div className="flex h-20 w-screen justify-between bg-gray-100 ">
      <h1 className="m-4 text-4xl text-400 font-extrabold">OYO</h1>
      <div className="   flex h-full px-3 items-center">
        <Block
          name={<PiShoppingBagOpenBold />}
          title=" Become a Mebmer "
          heading="Trusted by 5000 Corporates
"
        />
        <Block
          name={<FaRegBuilding />}
          title=" List Your Property "
          heading="start erning in 30 min"
        />
        <Block
          name={<IoCall />}
          title=" Become a Mebmer "
          heading="call us book now"
        />

        <div className="flex  justify-center items-center px-8 flex-row font-semibold text-base ">
          <h3 className="px-4 text-3xl">{<FaRegUserCircle />}</h3>
          <Link href={"/login"}>
            <h2>Sign/Login</h2>
          </Link>

          <div />
        </div>
      </div>
    </div>
  );
};

export default Header;
