/** @format */

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Overview</Link>
          </li>
          <li>
            <Link href="/">Transactions</Link>
          </li>
          <li>
            <Link href="/">Budgets</Link>
          </li>
          <li>
            <Link href="/">Pots</Link>
          </li>
          <li>
            <Link href="/">Recurring bills</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
