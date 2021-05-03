// 6.4 변수 인라인하기
// 의미 없는 변수 삭제

function price(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

function price2(anOrder) {
  return anOrder.basePrice > 1000;
}
