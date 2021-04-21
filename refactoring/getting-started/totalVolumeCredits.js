function totalVolumeCredits(data) {
  return data.performances.reduce(
    (total, perf) => total + perf.volumeCredits,
    0
  );
}

module.exports = totalVolumeCredits;
