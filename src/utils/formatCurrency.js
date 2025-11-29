// export function formatCurrency(value, locale = "en-US", currency = "USD") {
//   return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
//     `${value}`
//   );
// }
export function formatCurrency(value, locale = "en-GB", currency = "GBP") {
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
  const parts = formatter.formatToParts(value);
  let result = "";

  for (let part of parts) {
    if (part.type === "currency") {
      result += `${part.value} `;
    } else {
      result += part.value;
    }
  }

  return result;
}

