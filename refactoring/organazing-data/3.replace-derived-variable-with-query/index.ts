type Adjustment = {
  amount: number;
};

class ProductionPlan {
  _production;
  _adjustments: Adjustment[] = [];
  get production() {
    return this._adjustments.reduce((acc, cur) => acc + cur.amount, 0);
  }
  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment);
  }
}
