/** @format */

import Sidebar from "@/components/Sidebar/Sidebar";
import "../styles/main.scss";

import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: "400",
  variants: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
