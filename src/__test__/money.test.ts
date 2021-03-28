import Dollar from '../Dollar';

describe('Dollar', () => {
  test('$5 * 2 = 10' ,() => {
    const money = new Dollar(5);
    money.times(2);
    expect(10).toBe(money.amount);
  })
})

