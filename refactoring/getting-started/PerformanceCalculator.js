class PerformanceCalculator {
  constructor(aPerformance, play) {
    this.performance = aPerformance;
    this.play = play;
  }

  get amount() {
    // 서브 클래스에서 처리
  }

  get volumeCredits() {
    let volumeCredits = 0;
    volumeCredits += Math.max(this.performance.audience - 30, 0);

    return volumeCredits;
  }
}

module.exports = PerformanceCalculator;
