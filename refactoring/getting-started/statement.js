const amountFor = require("./amoutFor");
const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmount = require("./totalAmount");
const playFor = require("../playFor");
const volumeCreditsFor = require("./volumeCreditsFor");

function usd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(amount / 100);
}

function enrichPerformance(aPerformance) {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(aPerformance).name;
  result.amount = amountFor(aPerformance);
  result.volumeCredits = volumeCreditsFor(aPerformance);
  return result;
}

function statement(invoice) {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
    totalAmount: totalAmount(invoice),
    totalVolumeCredits: totalVolumeCredits(invoice)
  };
  return renderPlainText(statementData);
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
