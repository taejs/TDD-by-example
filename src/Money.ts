class Money {
  protected amount: number = 0;
  protected _currency: string;

  constructor(amount: number, currency: string) {
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

  times(times:number): Money {
    return new Money(this.amount * times, this.currency);
  };

  get currency() {
    return this._currency;
  }

  static dollar(amount: number):Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number):Money {
    return new Money(amount, 'CHF');
  }
}

export default Money;