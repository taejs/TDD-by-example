const playFor = require("../playFor");

function amountFor(aPerformance) {
  const play = playFor(aPerformance);
  let result = 0;

  switch (play.type) {
    case "tragedy":
      result = 400000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.time}`);
  }

  return result;
}

module.exports = amountFor;
