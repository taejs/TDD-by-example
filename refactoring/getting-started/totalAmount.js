function totalAmount(data) {
  let result = 0;

  for (let perf of data.performances) {
    result += perf.amount;
  }
  return result;
}

module.exports = totalAmount;
