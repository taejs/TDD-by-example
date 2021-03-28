import Dollar from '../Dollar';

describe('Dollar', () => {
  test('Dollar 사이드 이펙트 삭제 - 연산 수행 후에도 값이 바뀌지 않는다.' ,() => {
    const five = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(10).toBe(product.amount);
    product = five.times(3);
    expect(15).toBe(product.amount);
  })
  
  test('Dollar 비교 연산', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  })
})

