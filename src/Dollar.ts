class Dollar {
  public amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(times: number) {
    return new Dollar(this.amount * times);
  }

  equals(dollar: Object) {
    if(dollar instanceof Dollar) {
      return this.amount === dollar.amount;
    }
    return false;
  }
}

export default Dollar;