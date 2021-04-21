const amountFor = require("./amoutFor");
const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmount = require("./totalAmount");
const playFor = require("../playFor");
const volumeCreditsFor = require("./volumeCreditsFor");

function enrichPerformance(aPerformance) {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(aPerformance).name;
  result.amount = amountFor(aPerformance);
  result.volumeCredits = volumeCreditsFor(aPerformance);
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
