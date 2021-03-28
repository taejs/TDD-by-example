class Franc {
  private amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(times: number) {
    return new Franc(this.amount * times);
  }

  equals(franc: Object) {
    if(franc instanceof Franc) {
      return this.amount === franc.amount;
    }
    return false;
  }
}

export default Franc;