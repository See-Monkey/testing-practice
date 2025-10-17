import { capitalize, reverseString } from "./index.js";

test("capitalize 1", () => {
  expect(capitalize("lower")).toBe("Lower");
});

test("capitalize 2", () => {
  expect(capitalize("2fast")).toBe("2fast");
});

test("capitalize 3", () => {
  expect(() => {
    capitalize(2);
  }).toThrow(Error);
});

test("reverse string 1", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("reverse string 2", () => {
  expect(() => {
    reverseString(2);
  }).toThrow(Error);
});
