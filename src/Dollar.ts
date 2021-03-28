class Dollar {
  public amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(times: number) {
    this.amount *= times;
  }
}

export default Dollar;