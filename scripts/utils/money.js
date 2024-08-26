export function formatCurrency(param) {
  const res = (param / 100).toFixed(2);
  return res;
}
