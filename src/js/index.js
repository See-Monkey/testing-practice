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

export function caesarCipher(input, shift) {
  let output = "";
  for (const char of input) {
    output += shiftLetter(char, shift);
  }
  return output;
}

function shiftLetter(char, shift) {
  const charCode = char.charCodeAt(0);

  // Check if it's an uppercase letter (A-Z)
  if (charCode >= 65 && charCode <= 90) {
    let newCharCode = charCode + shift;
    if (newCharCode > 90) {
      // Wrap around from Z to A
      newCharCode = newCharCode - 26;
    } else if (newCharCode < 65) {
      // Wrap around from A to Z
      newCharCode = newCharCode + 26;
    }
    return String.fromCharCode(newCharCode);
  }

  // Check if it's a lowercase letter (a-z)
  else if (charCode >= 97 && charCode <= 122) {
    let newCharCode = charCode + shift;
    if (newCharCode > 122) {
      // Wrap around from z to a
      newCharCode = newCharCode - 26;
    } else if (newCharCode < 97) {
      // Wrap around from a to z
      newCharCode = newCharCode + 26;
    }
    return String.fromCharCode(newCharCode);
  }

  // If not a letter, return the original character
  else {
    return char;
  }
}
