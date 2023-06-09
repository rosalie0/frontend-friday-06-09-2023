import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Anton, Roboto } from "next/font/google";

// Doc on next.js fonts with tailwind:
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${anton.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
