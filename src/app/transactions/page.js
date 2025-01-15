/** @format */

import Table from "@/components/Table/Table";
import style from "./page.module.scss";
import data from "../../data/data.json";
const { transactions } = data;

function Page() {
  return (
    <div className={style.transactions}>
      <h1 className={style.transactions__heading}>Transactions</h1>

      <Table data={transactions} className={style.table}>
        <Table.Header
          columns={[
            "Recipient / Sender",
            "Catergory",
            "Transaction Date",
            "Amount",
          ]}
          className={style.table__header}
        />
        <Table.Body rows={transactions} />
      </Table>
    </div>
  );
}

export default Page;
