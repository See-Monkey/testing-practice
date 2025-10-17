import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "./index.js";

describe("Capitalize", () => {
  test("capitalize 1", () => {
    expect(capitalize("lower")).toBe("Lower");
  });

  test("capitalize 2", () => {
    expect(capitalize("2fast")).toBe("2fast");
  });

  test("capitalize error", () => {
    expect(() => {
      capitalize(2);
    }).toThrow(Error);
  });
});

describe("Reverse String", () => {
  test("reverse string 1", () => {
    expect(reverseString("reverse")).toBe("esrever");
  });

  test("reverse string error", () => {
    expect(() => {
      reverseString(2);
    }).toThrow(Error);
  });
});

describe("Calculator", () => {
  test("calculator add", () => {
    expect(calculator.add(1, 3)).toBe(4);
  });

  test("calculator subtract", () => {
    expect(calculator.subtract(1, 3)).toBe(-2);
  });

  test("calculator multiply", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("calculator divide", () => {
    expect(calculator.divide(12, 3)).toBe(4);
  });
});

describe("Caesar Cipher", () => {
  test("caesar wrap", () => {
    expect(caesarCipher("xyz", 4)).toBe("bcd");
  });

  test("caesar capitalization", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("caesar punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
