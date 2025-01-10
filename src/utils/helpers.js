/** @format */

export function formatToDollars(amount) {
  if (typeof amount !== "number") {
    throw new TypeError("Input must be a number");
  }

  return `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
