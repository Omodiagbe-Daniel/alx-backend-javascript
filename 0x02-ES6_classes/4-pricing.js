/*
  Implement a class named Pricing
*/

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = new Currency('', '')) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(val) {
    this._amount = val;
  }

  get amount() {
    return this._amount;
  }

  set currency(val) {
    this._currency = val;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
