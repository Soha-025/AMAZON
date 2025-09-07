export const formatCurrency = (num) => {
  return num.toLocaleString("en-PK", { style: "currency", currency: "PKR" });
};
