const PerformanceCalculator = require("./PerformanceCalculator");

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 0;
    result = 400000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }

    return result;
  }

  get volumeCredits() {
    return Math.max(this.performance - 30, 0);
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

module.exports = {
  TragedyCalculator,
  ComedyCalculator
};
