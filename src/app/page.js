/** @format */

import Box from "@/feature/overview/Box";
import BoxDetails from "@/feature/overview/BoxDetails";
import Pots from "@/feature/overview/Pots";
import Budgets from "@/feature/overview/Budgets";
import TransactionItem from "@/feature/overview/TransactionItem";
import BillInfo from "@/feature/overview/BillInfo";

import { getRecurringBills } from "@/utils/helpers";
import { balance, pots, budgets, transactions } from "../data/data.json";

import style from "./page.module.scss";

export default function Page() {
  const recurringBills = getRecurringBills(transactions);

  const totalAmountOfPaidBills = recurringBills
    .filter((bill) => bill.status === "paid")
    .reduce((acc, cur) => acc + Math.abs(cur.amount), 0)
    .toFixed(2);

  const totalAmountOfDueSoonBills = recurringBills
    .filter((bill) => bill.status === "soon")
    .reduce((acc, cur) => acc + Math.abs(cur.amount), 0)
    .toFixed(2);

  const totalAmountOfUpcommingBills = recurringBills
    .filter((bill) => bill.status !== "paid")
    .reduce((acc, cur) => acc + Math.abs(cur.amount), 0)
    .toFixed(2);

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
        <div className={style.expenses}>
          <Box title="Expenses" sum={balance.expenses} />
        </div>

        <div className={style.pots}>
          <BoxDetails title="Pots" to="/pots">
            <Pots pots={pots} />
          </BoxDetails>
        </div>

        <div className={style.budgets}>
          <BoxDetails title="Budgets" to="/budgets">
            <Budgets budgets={budgets} />
          </BoxDetails>
        </div>

        <div className={style.transactions}>
          <BoxDetails title="Transactions" link="View All" to="/transactions">
            <div className={style.transactionsBox}>
              {transactions.slice(0, 5).map((transaction) => (
                <TransactionItem
                  key={transaction.date}
                  avatar={transaction.avatar}
                  name={transaction.name}
                  amount={transaction.amount}
                  dateString={transaction.date}
                />
              ))}
            </div>
          </BoxDetails>
        </div>

        <div className={style.bills}>
          <BoxDetails title="Recurring Bills" to="/recurring-bills">
            <div className={style.billsBox}>
              <BillInfo
                type="Paid Bills"
                value={totalAmountOfPaidBills}
                color="#277c78"
              />
              <BillInfo
                type="Total Upcoming"
                value={totalAmountOfUpcommingBills}
                color="#f2cdac"
              />
              <BillInfo
                type="Due Soon"
                value={totalAmountOfDueSoonBills}
                color="#82c9d7"
              />
            </div>
          </BoxDetails>
        </div>
      </div>
    </div>
  );
}
