#!/usr/bin/python3
/*
  Implement a class named Currency:

  - Constructor attributes:
  code (String)
  name (String)
  Each attribute must be stored in an “underscore”
  attribute version (ex: name is stored in _name)
  Implement a getter and setter for each attribute.
  Implement a method named displayFullCurrency
  that will return the attributes in the following format name (code)
*/

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    }
  }

  get code() {
    return this._code;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    }
  }

  get name() {
    return this._name;
  }

  // method
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
