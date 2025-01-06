/** @format */

import { Public_Sans } from "next/font/google";

import Sidebar from "@/components/Sidebar/Sidebar";

import "@/styles/main.scss";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variants: ["400", "700"],
  weight: ["400", "700"],
});

import style from "./layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} ${style.layout}`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
