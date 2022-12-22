#!/usr/bin/node
/*
  Implement a function named initializeRooms
B  It should return an array of 3 ClassRoom objects
  with the sizes 19, 20, and 34 (in this order)
*/

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const num = [19, 20, 34];
  const obj = [];
  for (let i = 0; i < 3; i = 1 + i) {
    obj.push(new ClassRoom(num[i]));
  }
  return obj;
}
