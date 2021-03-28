import Dollar from '../Dollar';
import Franc from '../Franc';

describe('Money', () => {
  test('Dollar 사이드 이펙트 삭제 - 연산 수행 후에도 값이 바뀌지 않는다.' ,() => {
    const five = new Dollar(5);
    expect(new Dollar(10).equals(five.times(2))).toBe(true);
    expect(new Dollar(15).equals(five.times(3))).toBe(true);
  })

  test('Franc - 곱 연산 수행 후에도 값이 바뀌지 않는다.' ,() => {
    const five = new Franc(5);
    expect(new Franc(10).equals(five.times(2))).toBe(true);
    expect(new Franc(15).equals(five.times(3))).toBe(true);
  })

  test('Money 비교 연산', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  })
})