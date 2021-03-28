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
}

class Dollar extends Money{
  times(times: number) {
    return new Dollar(this.amount * times);
  }
}

export default Money;