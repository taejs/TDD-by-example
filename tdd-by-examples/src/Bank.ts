import Expression from "./Expression";
import Money, {Sum} from "./Money";

class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to:string) {
    this.from = from;
    this.to = to;
  }

  get value(): string {
    return this.from + '&' + this.to;
  }
}

class Bank {
  rates = new Map();

  reduce(expression: Sum, to:string): Money
  reduce(expression: Money, to:string): Money
  reduce(expression: Expression, to: string): Expression {
    return expression.reduce(this, to);
  }

  rate(from:string, to:string) {
    return this.rates.get(new Pair(from, to).value);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).value, rate);
  }
}

export default Bank;