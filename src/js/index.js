console.log("Hi, Mom!");

import "../css/style.css";

export function capitalize(string) {
  if (typeof string !== "string" || string.length === 0) {
    throw new Error("Must provide a string");
  }
  if (!/^[a-z]/.test(string.charAt(0))) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (typeof string !== "string" || string.length === 0) {
    throw new Error("Must provide a string");
  }
  return string.split("").reverse().join("");
}

class Calculator {
  constructor() {}

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }
}
export const calculator = new Calculator();
