class Currency {
    private amount = 0;
    constructor(amountParam) {
        this.amount = amountParam;
    }
    equals(currency: Currency) {
        this.amount === currency.amount;
    }
    add(currency: Currency) {
        return new Currency(this.amount + currency.amount);
    }
}

