/** @format */

import Box from "@/feature/Box";

import { balance } from "../data/data.json";

import style from "./page.module.scss";

export default function Page() {
  return (
    <div className={style.overview}>
      <h1 className={style.heading}>Overview</h1>
      <div className={style.container}>
        <div className={style.balance}>
          <Box title="Current Balance" sum={balance.current} focus={true} />
        </div>
        <div className={style.income}>
          <Box title="Income" sum={balance.income} />
        </div>
        <div className={style.expensses}>
          <Box title="Expensses" sum={balance.expenses} />
        </div>

        <div className={style.pots}>Pots</div>
        <div className={style.budgets}>Budgets</div>
        <div className={style.transactions}>Transactions</div>
        <div className={style.bills}>Bills</div>
      </div>
    </div>
  );
}
