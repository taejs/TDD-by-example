import Money from "./Money";

class Dollar extends Money{

  times(times: number) {
    return new Dollar(this.amount * times);
  }
}

export default Dollar;