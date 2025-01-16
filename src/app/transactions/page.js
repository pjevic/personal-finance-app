/** @format */

import Table from "@/components/Table/Table";
import TableOperations from "@/components/Table/TableOperations";
import style from "./page.module.scss";
import data from "../../data/data.json";
const { transactions } = data;

function Page() {
  return (
    <div className={style.transactions}>
      <h1 className={style.transactions__heading}>Transactions</h1>

      <TableOperations />
      <Table data={transactions}>
        <Table.Header
          columns={[
            "Recipient / Sender",
            "Catergory",
            "Transaction Date",
            "Amount",
          ]}
        />
        <Table.Body rows={transactions} />
      </Table>
    </div>
  );
}

export default Page;
