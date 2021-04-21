function totalVolumeCredits(data) {
  let volumeCredits = 0;

  for (let perf of data.performances) {
    volumeCredits += perf.volumeCredits;
  }
}

module.exports = totalVolumeCredits;
