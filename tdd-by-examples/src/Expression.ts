import Bank from "./Bank";

abstract class Expression {
  abstract reduce(bank:Bank, to: string): Expression;
}

export default Expression;