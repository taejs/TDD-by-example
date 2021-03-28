import Dollar from '../Dollar';
import Franc from '../Franc';
import Money from "../Money";

describe('Money', () => {
  test('Dollar 사이드 이펙트 삭제 - 곱연산 수행 후에도 값이 바뀌지 않는다.' ,() => {
    const five: Money = Money.dollar(5);
    expect(Money.dollar(10).equals(five.times(2))).toBe(true);
    expect(Money.dollar(15).equals(five.times(3))).toBe(true);
  })

  test('Franc - 곱 연산 수행 후에도 값이 바뀌지 않는다.' ,() => {
    const five = new Franc(5);
    expect(new Franc(10).equals(five.times(2))).toBe(true);
    expect(new Franc(15).equals(five.times(3))).toBe(true);
  })

  test('Money 비교 연산', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(Money.dollar(5).equals(new Franc(5))).toBe(false);
    expect(new Franc(5).equals(Money.dollar(5))).toBe(false);
  })
})