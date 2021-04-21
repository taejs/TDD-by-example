function volumeCreditsFor(perf) {
  let volumeCredits = 0;
  volumeCredits += Math.max(perf.audience - 30, 0);

  if ("comedy" === perf.play.type) {
    volumeCredits += Math.floor(perf.audience / 5);
  }

  return volumeCredits;
}

module.exports = volumeCreditsFor;
