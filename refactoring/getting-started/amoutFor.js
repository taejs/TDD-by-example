const playFor = require("./playFor");
const PerformanceCalculator = require("./PerformanceCalculator");

function amountFor(aPerformance) {
  return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
}

module.exports = amountFor;
