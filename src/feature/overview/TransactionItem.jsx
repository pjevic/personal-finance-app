/** @format */

import Image from "next/image";

import { formatToDollarsWithPrefix, formatDate } from "@/utils/helpers";

import style from "./TransactionItem.module.scss";

function TransactionItem({ dateString, avatar, name, amount }) {
  const amountColor = amount > 0 ? style.positiveAmount : style.negativeAmount;

  return (
    <div className={style.transactionItem}>
      <Image
        src={avatar}
        height={40}
        width={40}
        alt={`${name}'s avatar`}
        className={style.image}
      />

      <p className={style.name}>{name}</p>

      <div className={style.meta}>
        <data value={amount} className={`${style.amount} ${amountColor}`}>
          {formatToDollarsWithPrefix(amount)}
        </data>
        <time dateTime={dateString} className={style.date}>
          {formatDate(dateString)}
        </time>
      </div>
    </div>
  );
}

export default TransactionItem;
