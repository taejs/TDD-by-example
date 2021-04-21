function totalAmount(data) {
  return data.performances.reduce((total, perf) => total + perf.amount, 0);
}

module.exports = totalAmount;
