const amountFor = require("./amoutFor");

function totalAmount() {
  let result = 0;

  for (let perf of invoice.performances) {
    result += amountFor(perf);
  }
  return result;
}

module.exports = totalAmount;
