import Image from "next/image";
import { anton, roboto } from "../styles/fonts";

export default function Home() {
  return (
    <div>
      <h1 className="text-figma-grey uppercase font-bold text-5xl">
        shoes for every day
      </h1>
      <h1 className="font-roboto">roboto test</h1>
      <h1 className="font-anton">anton test</h1>
    </div>
  );
}
