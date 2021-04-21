const playFor = require("../playFor");
const PerformanceCalculator = require("./PerformanceCalculator");

function volumeCreditsFor(perf) {
  return new PerformanceCalculator(perf, playFor(perf));
}

module.exports = volumeCreditsFor;
