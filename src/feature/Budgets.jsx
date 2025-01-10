/** @format */

"use client";

import { PieChart, Tooltip, Pie, Cell } from "recharts";

// Utility function to lighten a color
const lightenColor = (hex, amount = 0.2) => {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  const lighten = (x) => Math.min(255, Math.floor(x + (255 - x) * amount));

  return `#${[lighten(r), lighten(g), lighten(b)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("")}`;
};

function Budgets({ budgets }) {
  const pieChartData = budgets.map((budget) => ({
    name: budget.category,
    value: budget.maximum,
    color: budget.theme,
    lightColor: lightenColor(budget.theme), // Add lightened color
  }));

  console.log(pieChartData);

  return (
    <div>
      <PieChart width={240} height={240}>
        {/* Outer Ring */}
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={70}
          label
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
          outerRadius={90}
          innerRadius={40}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.lightColor} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      <div></div>
    </div>
  );
}

export default Budgets;
