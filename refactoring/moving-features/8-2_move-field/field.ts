class Customer {
  _name: string;
  _contract: CustomerContract;

  constructor({ name, discountRate }) {
    this._name = name;
    this._contract = new CustomerContract(new Date(), discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    return this._setDiscountRate(this.discountRate + 0.03);
  }
  applyDiscount(amount) {
    return amount.substract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  _startDate: Date;
  _discountRate: number;
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}
