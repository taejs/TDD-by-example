const amountFor = require("./amoutFor");
const volumeCreditsFor = require("./volumeCreditsFor");

function statement(invoice) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 : 고객명 ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    result += `${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    }석)\n`;

    totalAmount += amountFor(perf);
  }
  result += `총액 ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

module.exports = statement;
