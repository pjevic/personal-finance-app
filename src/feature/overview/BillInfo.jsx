/** @format */

import style from "./BillInfo.module.scss";

import { formatToDollars } from "@/utils/helpers";

function BillInfo({ type, value, color }) {
  return (
    <div className={style.containerMain}>
      <div className={style.containerSub}>
        <p className={style.type}>{type}</p>
        <p className={style.value}>{formatToDollars(Number(value))}</p>
        <span className={style.line} style={{ backgroundColor: color }}></span>
      </div>
    </div>
  );
}

export default BillInfo;
