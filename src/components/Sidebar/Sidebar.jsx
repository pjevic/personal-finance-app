/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  ArrowsDownUp,
  ChartDonut,
  TipJar,
  Receipt,
  ArrowFatLinesLeft,
} from "@phosphor-icons/react/dist/ssr";

import Logo from "../Logo/Logo";
import style from "./Sidebar.module.scss";
import { useState } from "react";

const NAV_ITEMS = [
  {
    href: "/",
    Icon: House,
    label: "Overview",
    alt: "Navigate to the main dashboard for an overview of your financial data",
    iconWeight: "fill",
  },
  {
    href: "/transactions",
    Icon: ArrowsDownUp,
    label: "Transactions",
    alt: "View, filter, or manage your transactions efficiently",
  },
  {
    href: "/budgets",
    Icon: ChartDonut,
    label: "Budgets",
    alt: "Visualize budgets and monitor financial progress",
    iconWeight: "fill",
  },
  {
    href: "/pots",
    Icon: TipJar,
    label: "Pots",
    alt: "Access and manage your financial savings pots",
    iconWeight: "fill",
  },
  {
    href: "/recurring-bills",
    Icon: Receipt,
    label: "Recurring bills",
    alt: "Track and manage recurring bills and expenses",
    iconWeight: "fill",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <aside className={`${style.sidebar} ${isCollapsed ? style.collapsed : ""}`}>
      <Logo isCollapsed={isCollapsed} />

      <nav>
        <ul>
          {NAV_ITEMS.map(({ href, Icon, label, alt, iconWeight }) => (
            <li key={href}>
              <Link
                href={href}
                aria-label={alt}
                className={`${pathname === href ? style.active : ""}`}
              >
                <span className={style.line}></span>
                <Icon
                  size="2.4rem"
                  weight={iconWeight || "regular"}
                  alt={alt}
                  className={style.icon}
                />
                {!isCollapsed && (
                  <span className={`${style.label} textPreset__3`}>
                    {label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <button className={style.toggle} onClick={toggleSidebar}>
          <ArrowFatLinesLeft
            weight="fill"
            size="2.4rem"
            alt="Toggle the sidebar"
            className={style.icon}
          />
          {!isCollapsed && (
            <span className={`${style.label} textPreset__3`}>
              Minimize Menu
            </span>
          )}
        </button>
      </nav>
    </aside>
  );
}
