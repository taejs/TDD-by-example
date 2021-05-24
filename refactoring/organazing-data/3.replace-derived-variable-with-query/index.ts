type Adjustment = {
  amount: number;
};

class ProductionPlan {
  _production;
  _adjustments: Adjustment[] = [];
  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
