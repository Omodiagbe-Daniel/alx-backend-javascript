#!/usr/bin/node
/*
  Implement a class named Pricing
*/

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = new Currency('', '')) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
