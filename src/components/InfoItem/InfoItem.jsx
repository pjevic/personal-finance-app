/** @format */

import style from "./InfoItem.module.scss";

import { formatToDollars } from "@/utils/helpers";

function InfoItem({ pot }) {
  return (
    <div key={pot.name} className={style.detail}>
      <div className={style.line} style={{ backgroundColor: pot.theme }}></div>
      <div>
        <span className={style.name}>{pot.name}</span>
        <div className={style.sum}>
          {formatToDollars(pot.total).slice(0, -3)}
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
