/** @format */

import { formatToDollars } from "../utils/helpers";

import style from "./Box.module.scss";

function Box({ title, sum, focus }) {
  return (
    <div className={`${style.box} ${focus ? style.focus : ""}`}>
      <div className={style.title}>{title}</div>
      <div className={style.sum}>{formatToDollars(sum)}</div>
    </div>
  );
}

export default Box;
