"use strict";
const arr = [true, "hello", 5, 12, -200, false, false, "word"];

const countTypesInArray = (arr) => {
  const types = {};

  for (const item of arr) {
    const type = typeof item;
    const count = types[type] || 0;
    types[type] = count + 1;
  }

  return types;
};

module.exports = { countTypesInArray };
