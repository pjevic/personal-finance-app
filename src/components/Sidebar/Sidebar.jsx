/** @format */

import Link from "next/link";

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

export default function Sidebar() {
  const mirrored = true;

  return (
    <aside className={style.sidebar}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/">
              <House
                weight="fill"
                size="2.4rem"
                alt="Icon"
                className={style.icon}
              />
              <span className={style.label}>Overview</span>
            </Link>
          </li>
          <li>
            <Link href="/transactions">
              <ArrowsDownUp size="2.4rem" alt="Icon" className={style.icon} />
              <span className={style.label}>Transactions</span>
            </Link>
          </li>
          <li>
            <Link href="/budgets">
              <ChartDonut
                weight="fill"
                size="2.4rem"
                alt="Icon"
                className={style.icon}
              />
              <span className={style.label}>Budgets</span>
            </Link>
          </li>
          <li>
            <Link href="/pots">
              <TipJar
                weight="fill"
                size="2.4rem"
                alt="Icon"
                className={style.icon}
              />
              <span className={style.label}>Pots</span>
            </Link>
          </li>
          <li>
            <Link href="/recurring-bills">
              <Receipt
                weight="fill"
                size="2.4rem"
                alt="Icon"
                className={style.icon}
              />
              <span className={style.label}>Recurring bills</span>
            </Link>
          </li>
        </ul>
      </nav>
      <ArrowFatLinesLeft
        weight="fill"
        size="2.4rem"
        alt="Icon"
        mirrored={mirrored}
        className={style.icon}
      />
      <span className={style.label}>Minimize Menu</span>
    </aside>
  );
}
