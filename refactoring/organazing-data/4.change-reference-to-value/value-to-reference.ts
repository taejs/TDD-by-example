class Order {
  _amount: number;
  _customer: Customer;
  constructor(data) {
    this._amount = data.amount;
    this._customer = registerCustomer(data.customerId);
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

//repository object
let _repositoryData = initialize();

export function initialize() {
  return {
    customers: new Map()
  };
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}
// 생성자 본문이 전역 저장소와 결합된다는 문제가 있다.
// 저장소를 생성자 매개변수로 전달(DI)하여 해결할 수 있다.
