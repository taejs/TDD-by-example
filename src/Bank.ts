import Expression from "./Expression";
import Money, {Sum} from "./Money";

class Bank {
  reduce(expression: Sum, to:string): Money
  reduce(expression: Money, to:string): Money
  reduce(expression: Expression, to: string): Expression {
    return expression.reduce(to);
  }

  addRate(currency, c2, n) {

  }
}

export default Bank;