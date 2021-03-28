import Money from "./Money";

class Franc extends Money{
  times(times: number) {
    return new Franc(this.amount * times);
  }
}

export default Franc;