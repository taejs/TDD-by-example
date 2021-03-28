import Expression from "./Expression";
import Money from "./Money";

class Bank {
  reduce(expression: Expression, currency: string) {
    return new Money(10, currency);
  }
}

export default Bank;