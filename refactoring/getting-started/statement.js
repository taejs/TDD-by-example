const amountFor = require("./amoutFor");

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 : 고객명 ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playId];
    const thisAmount = amountFor(perf, play);

    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    result += `${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액 ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

module.exports = statement;
