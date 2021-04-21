const amountFor = require("./amoutFor");
const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmount = require("./totalAmount");
const playFor = require("../playFor");
const volumeCreditsFor = require("./volumeCreditsFor");
const PerformanceCalculator = require("./PerformanceCalculator");

function enrichPerformance(aPerformance) {
  const calculator = new PerformanceCalculator(
    aPerformance,
    playFor(aPerformance)
  );
  const result = Object.assign({}, aPerformance);
  result.play = calculator.play;
  result.amount = calculator.amount;
  result.volumeCredits = calculator.volumeCredits;
  return result;
}

function createStatementData(invoice) {
  return {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
    totalAmount: totalAmount(invoice),
    totalVolumeCredits: totalVolumeCredits(invoice)
  };
}

module.exports = createStatementData;
