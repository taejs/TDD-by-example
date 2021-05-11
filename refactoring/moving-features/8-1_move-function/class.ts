class Account {
  _daysOverdrawn: number;
  type = new AccountType();

  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    // 위임 메서드
    return this.type.overdraftCharge(this._daysOverdrawn);
  }
}

class AccountType {
  get isPremium() {
    return true;
  }

  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}
