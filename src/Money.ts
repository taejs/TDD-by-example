abstract class Money {
  protected amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(money: Object) {
    if(money instanceof Money) {
      return money.constructor === this.constructor &&
          this.amount === money.amount;
    }
    return false;
  }

  abstract times(times:number): Money;

  static dollar(amount: number):Money {
    return new Dollar(amount);
  }

  static franc(amount: number):Money {
    return new Franc(amount);
  }
}

class Dollar extends Money{
  times(times: number) {
    return Money.dollar(this.amount * times);
  }
}

class Franc extends Money{
  times(times: number): Money {
    return Money.franc(this.amount * times);
  }
}

export default Money;