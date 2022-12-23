#!/usr/bin/node
/*
  Implement a class named HolbertonCourse
*/

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (typeof students !== 'object') {
      throw TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // access name
  set name(val = '') {
    if (typeof (val) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = val;
  }

  // access name
  get name() {
    return this._name;
  }

  set length(value = 0) {
    if (typeof (value) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set students(valu = []) {
    if (valu !== 'object') {
      throw TypeError('Students must be an array of strings');
    }
    for (const ele in valu) {
      if (typeof ele !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    }
    this._students = valu;
  }

  get students() {
    return this._students;
  }
}
