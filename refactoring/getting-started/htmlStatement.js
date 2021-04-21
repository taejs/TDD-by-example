const createStatementData = require("./createStatementData");
const usd = require("./usd");

function htmlStatement(invoice) {
  return renderHtml(createStatementData(invoice));
}

function renderHtml(data) {
  return `
    <h1>청구 내역 (고객명: ${data.customer})</h1>
    <table>
        <tr>
            <th>연극</th>
            <th>좌석 수</th>
            <th>금액</th>    
        </tr>
        ${data.performances.map(
          perf => `
            <tr>
                <td>${perf.play.name}</td>
                <td>${perf.audience}석</td>
                <td>${usd(perf.amount)}석</td>
            </tr>
          `
        )}
    </table>
    <p>총액 : <em>${usd(data.totalAmount)}</em></p>
    <p>적립 포인트 : <em>${usd(data.totalVolumeCredits)}</em></p>
  `;
}

module.exports = htmlStatement;
