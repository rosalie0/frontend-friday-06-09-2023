import { Anton, Roboto } from "next/font/google";

// Doc on next.js fonts with tailwind:
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-roboto",
});
