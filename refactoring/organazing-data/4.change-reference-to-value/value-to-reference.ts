class Order {
  _amount: number;
  _customer: Customer;
  constructor(data) {
    this._amount = data.amount;
    this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}
class Customer {
  _id: number;
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

const o1 = new Order({ amount: 100, customerId: "de56" });
const o2 = new Order({ amount: 200, customerId: "de56" });
const o3 = new Order({ amount: 140, customerId: "de56" });
const o4 = new Order({ amount: 300, customerId: "de56" });
const o5 = new Order({ amount: 100, customerId: "de56" });
// 같은 객체를 표현하려고 했지만 독립된 고객 객체 5개가 만들어진다.