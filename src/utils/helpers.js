/** @format */

export function formatToDollars(amount) {
  if (typeof amount !== "number") {
    throw new TypeError("Input must be a number");
  }

  return `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function formatToDollarsWithPrefix(amount) {
  if (typeof amount !== "number") {
    throw new TypeError("Input must be a number");
  }

  const prefix = amount > 0 ? "+" : amount < 0 ? "-" : "";

  const formattedAmount = Math.abs(amount)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${prefix}$${formattedAmount}`;
}

export const lightenColor = (hex, amount = 0.3) => {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  const lighten = (x) => Math.min(255, Math.floor(x + (255 - x) * amount));

  return `#${[lighten(r), lighten(g), lighten(b)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("")}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};
