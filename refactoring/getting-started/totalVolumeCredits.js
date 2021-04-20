const volumeCreditsFor = require("./volumeCreditsFor");

function totalVolumeCredits() {
  let volumeCredits = 0;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
}

module.exports = totalVolumeCredits;
