const amountFor = require("./amoutFor");
const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmount = require("./totalAmount");
const playFor = require("../playFor");

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
  return result;
}

function statement(invoice) {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance)
  };
  return renderPlainText(statementData);
}

function renderPlainText({ customer, performances }) {
  let result = `청구 내역 : 고객명 ${customer}\n`;

  for (let perf of performances) {
    result += `${perf.play.name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;
  }

  result += `총액 ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;

  return result;
}

module.exports = statement;
