/** @format */

import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

import style from "./BoxDetails.module.scss";

function BoxDetails({ children, title, link = "See Details", to }) {
  return (
    <div className={style.box}>
      <div className={style.line}>
        <h3 className={style.title}>{title}</h3>
        {to && (
          <Link href={to} className={style.link}>
            <span>{link}</span>
            <CaretDown size="1.2rem" weight="fill" className={style.icon} />
          </Link>
        )}
      </div>

      {children}
    </div>
  );
}

export default BoxDetails;
