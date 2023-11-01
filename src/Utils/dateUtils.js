const monthsMap = new Map([
  ["January", "JAN"],
  ["February", "FEB"],
  ["March", "MAR"],
  ["April", "APR"],
  ["May", "MAY"],
  ["June", "JUN"],
  ["July", "JUL"],
  ["August", "AUG"],
  ["September", "SEP"],
  ["October", "OCT"],
  ["November", "NOV"],
  ["December", "DEC"],
]);

const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: currentYear - 1899 },
  (_, index) => 1900 + index
);

export { monthsMap, currentYear, years };
