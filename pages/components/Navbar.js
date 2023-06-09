import React from "react";
import Hamburger from "../../public/hamburger.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between px-4 py-3">
      <div className="left-half flex justify-items-start gap-32 items-center">
        <Image src={Hamburger} alt="a hamburger icon" width={50} height={50} />
        {/* <img src={Hamburger}></img> */}
        <div className="font-anton text-white text-3xl uppercase tracking-widest">
          STEPS
        </div>
      </div>
      <div className="right-half flex justify-items-end gap-32 items-center">
        <div className="font-roboto text-figma-grey text-xl py-2 px-8">
          About
        </div>
        <div className="font-roboto text-figma-grey text-xl py-2 px-8">
          Shop
        </div>
        <div className="font-roboto text-figma-grey text-xl py-2 px-8 bg-figma-yellow rounded-3xl">
          Cart
        </div>
      </div>
    </div>
  );
}
