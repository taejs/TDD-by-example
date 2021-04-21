const createStatementData = require("./createStatementData");

function usd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(amount / 100);
}

function statement(invoice) {
  return renderPlainText(createStatementData(invoice));
}

function renderPlainText({
  customer,
  performances,
  totalAmount,
  totalVolumeCredits
}) {
  let result = `청구 내역 : 고객명 ${customer}\n`;

  for (let perf of performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액 ${totalAmount}\n`;
  result += `적립 포인트: ${totalVolumeCredits}점\n`;

  return result;
}

module.exports = statement;
