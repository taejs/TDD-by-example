class Money {
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
}

export default Money;