/** @format */

import { TipJar } from "@phosphor-icons/react/dist/ssr";

import { formatToDollars } from "@/utils/helpers";

import style from "./Pots.module.scss";

function Pots({ pots }) {
  const totalSaved = pots.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div className={style.container}>
      <div className={style.total}>
        <TipJar size="4rem" weight="light" className={style.icon} />
        <div>
          <span>Total Saved</span>
          <div className={style.totalSaved}>
            {formatToDollars(totalSaved).slice(0, -3)}
          </div>
        </div>
      </div>

      <div className={style.details}>
        {pots.slice(0, 4).map((pot) => {
          return (
            <div key={pot.name} className={style.detail}>
              <div
                className={style.line}
                style={{ backgroundColor: pot.theme }}
              ></div>
              <div>
                <span className={style.name}>{pot.name}</span>
                <div className={style.sum}>
                  {formatToDollars(pot.total).slice(0, -3)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pots;
