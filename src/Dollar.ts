class Dollar {
  public amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(times: number) {
    return new Dollar(this.amount * times);
  }
}

export default Dollar;