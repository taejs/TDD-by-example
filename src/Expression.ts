abstract class Expression {
  abstract reduce(to: string): Expression;
}

export default Expression;