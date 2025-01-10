/** @format */

import { formatToDollars } from "@/utils/helpers";
import style from "./InfoItem.module.scss";

function InfoItem({ name, color, total }) {
  return (
    <div key={name} className={style.detail}>
      <div className={style.line} style={{ backgroundColor: color }}></div>
      <div>
        <span className={style.name}>{name}</span>
        <div className={style.sum}>{formatToDollars(total).slice(0, -3)}</div>
      </div>
    </div>
  );
}

export default InfoItem;
