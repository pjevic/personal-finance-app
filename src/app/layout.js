/** @format */

"use client";

import { useState } from "react";
import { Public_Sans } from "next/font/google";

import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/main.scss";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["400", "700"],
});

import style from "./layout.module.scss";

export default function RootLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <html lang="en">
      <body className={`${publicSans.className}`}>
        <div className={style.layout}>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

          <main className={`${isCollapsed ? style.collapsed : ""}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
