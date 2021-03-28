import Money from "./Money";

class Franc extends Money{
  times(times: number): Money {
    return new Franc(this.amount * times);
  }
}

export default Franc;