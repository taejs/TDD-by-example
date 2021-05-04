class Customer {
  _name: string;
  _discountRate: number;
  _contract: CustomerContract;

  constructor({ name, discountRate }) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }

  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    return (this._discountRate += 0.03);
  }
  applyDiscount(amount) {
    return amount.substract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  _startDate: Date;
  constructor(startDate) {
    this._startDate = startDate;
  }
}
