abstract class Money {
  protected amount: number = 0;
  protected _currency: string;

  protected constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  equals(money: Object) {
    if(money instanceof Money) {
      return this.currency === money.currency &&
          this.amount === money.amount;
    }
    return false;
  }

  abstract times(times:number): Money;

  get currency() {
    return this._currency;
  }

  static dollar(amount: number):Money {
    return new Dollar(amount);
  }

  static franc(amount: number):Money {
    return new Franc(amount);
  }
}

class Dollar extends Money{
  constructor(amount: number) {
    super(amount, 'USD');
  }

  times(times: number) {
    return Money.dollar(this.amount * times);
  }
}

class Franc extends Money{
  constructor(amount: number) {
    super(amount, 'CHF');
  }

  times(times: number): Money {
    return Money.franc(this.amount * times);
  }
}

export default Money;