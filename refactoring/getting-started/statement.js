const amountFor = require("./amoutFor");
const totalVolumeCredits = require("./totalVolumeCredits");

function usd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(amount / 100);
}

function statement(invoice) {
  let totalAmount = 0;
  let result = `청구 내역 : 고객명 ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;

    totalAmount += amountFor(perf);
  }

  result += `총액 ${usd(totalAmount)}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;
}

module.exports = statement;
