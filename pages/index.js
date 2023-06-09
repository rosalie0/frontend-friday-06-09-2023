import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1
        className="text-figma-grey uppercase font-bold text-5xl
      "
      >
        shoes for every day
      </h1>
    </div>
  );
}
