/** @format */

"use client";

import { useEffect, useState } from "react";
import { PieChart, Tooltip, Pie, Cell, ResponsiveContainer } from "recharts";

import { lightenColor, formatToDollars } from "@/utils/helpers";
import InfoItem from "@/components/InfoItem/InfoItem";
import style from "./Budgets.module.scss";

function Budgets({ budgets }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const pieChartData = budgets.map((budget) => ({
    name: budget.category,
    value: budget.maximum,
    color: budget.theme,
    lightColor: lightenColor(budget.theme),
  }));

  return (
    <div className={style.container}>
      <div className={style.pieChartWrapper}>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart width={240} height={240}>
            {/* Outer Ring */}
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={94}
              stroke="none"
              startAngle={450}
              endAngle={90}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            {/* Inner Ring */}
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={94}
              innerRadius={81}
              stroke="none"
              startAngle={450}
              endAngle={90}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.lightColor} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className={style.circleCenter}>
          <div className={style.sum}>{formatToDollars(338).slice(0, -3)}</div>
          <div className={style.text}>
            of {formatToDollars(975).slice(0, -3)} limit
          </div>
        </div>
      </div>

      <div className={style.legend}>
        {budgets.map((budget) => (
          <InfoItem
            key={budget.category + budget.maximum}
            name={budget.category}
            color={budget.theme}
            total={budget.maximum}
          />
        ))}
      </div>
    </div>
  );
}

export default Budgets;
