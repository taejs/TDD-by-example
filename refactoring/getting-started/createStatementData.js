const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmount = require("./totalAmount");
const playFor = require("./playFor");
const { ComedyCalculator } = require("./calculators");
const { TragedyCalculator } = require("./calculators");

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
  }
}

function enrichPerformance(aPerformance) {
  const calculator = createPerformanceCalculator(
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
