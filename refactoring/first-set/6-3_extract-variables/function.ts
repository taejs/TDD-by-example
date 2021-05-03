function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

// 1. 표현식 내부의 사이드 이펙트 존재 여부를 확인한다.

// 2. 불변 변수를 선언하고 이름을 붙일 표현식의 복제본을 대입한다.
// 3. 원본 표현식을 새로 만든 변수로 교체한다.
// 4. 테스트한다.
// 5. 표현식을 여러 곳에서 사용한다면 각각을 새로 만든 변수로 교체한다. 하나 교체할 때마다 테스트한다.

// basePrice
function price1(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice; // (2)
  return (
    basePrice - // (3)
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(basePrice * 0.1, 100) // (5)
  );
}

// quantityDiscount
function price2(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05; // (2)

  return (
    basePrice -
    quantityDiscount + // (3)
    Math.min(basePrice * 0.1, 100)
  );
}

// shipping + 주석 삭제
function price3(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100); // (2)

  return basePrice - quantityDiscount + shipping; // (3)
}
