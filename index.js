const addDays = require("date-fns/addDays");

let daysFunc = (days) => {
  let result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
module.exports = daysFunc;
