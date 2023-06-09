import Image from "next/image";
import Navbar from "./components/Navbar";
import RectangleShoeImage from "../public/frontendfriday-shoe.png";
import SquareShoeImage from "../public/pexels-ray-piedra-1464625.png";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-figma-purple from-50% to-white to-50% ">
      <Navbar />
      <div className="grid grid-rows-2 max-w-7xl mx-auto mt-40">
        <div className="grid grid-cols-2 items-center">
          <h1 className="text-figma-grey font-anton uppercase text-5xl md:text-7xl lg:text-9xl text-right pr-5">
            shoes for
          </h1>
          <h1 className="text-figma-grey font-anton uppercase text-5xl md:text-7xl lg:text-9xl text-left pl-5">
            every day
          </h1>
        </div>
        <div className="flex justify-end gap-4 mr-10">
          <Image
            src={RectangleShoeImage}
            alt="a closeup of a woman's shoe stepping on a hulahoop"
            height={282}
            width={490}
            //sizes="(min-width: 768px) 80px, 60px"
          />
          <Image
            src={SquareShoeImage}
            alt="a closeup of a woman's shoe stepping on a hulahoop"
            height={282}
            width={282}
            //sizes="(min-width: 768px) 80px, 60px"
          />
        </div>
      </div>
    </div>
  );
}
