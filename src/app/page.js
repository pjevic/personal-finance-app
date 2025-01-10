/** @format */

import Box from "@/feature/Box";
import BoxDetails from "@/feature/BoxDetails";
import Pots from "@/feature/Pots";

import { balance, pots } from "../data/data.json";

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

        <div className={style.pots}>
          <BoxDetails title="Pots" to="/pots">
            <Pots pots={pots} />
          </BoxDetails>
        </div>

        <div className={style.budgets}>
          <BoxDetails title="Budgets" to="/budgets" />
        </div>
        <div className={style.transactions}>
          <BoxDetails title="Transactions" link="View All" to="/transactions" />
        </div>
        <div className={style.bills}>
          <BoxDetails title="Recurring Bills" to="/recurring-bills" />
        </div>
      </div>
    </div>
  );
}
