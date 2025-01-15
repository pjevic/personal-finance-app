/** @format */

import Image from "next/image";
import { formatToDollarsWithPrefix, formatDate } from "@/utils/helpers";
import style from "./Table.module.scss";

const Table = ({ children }) => {
  return <div className={style.table}>{children}</div>;
};

const Header = ({ columns }) => {
  return (
    <header className={style.table__header}>
      {columns.map((col, index) => (
        <div key={index} className={style.table__headerCell}>
          {col}
        </div>
      ))}
    </header>
  );
};

const Body = ({ rows }) => {
  return (
    <div className={style.table__body}>
      {rows.map(({ avatar, name, category, date, amount }, rowIndex) => {
        const amountColor =
          amount > 0 ? style.positiveAmount : style.negativeAmount;

        return (
          <div key={rowIndex} className={style.table__row}>
            <div className={style.table__cell}>
              <Image
                src={avatar}
                alt={name}
                key={avatar}
                width={40}
                height={40}
              />
              <span className={style.name}>{name}</span>
            </div>
            <p className={style.table__cell}>{category}</p>
            <p className={style.table__cell}>{formatDate(date)}</p>
            <data value={amount} className={`${style.amount} ${amountColor}`}>
              {formatToDollarsWithPrefix(amount)}
            </data>
          </div>
        );
      })}
    </div>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
