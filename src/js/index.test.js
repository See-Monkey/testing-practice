import { capitalize } from "./index.js";

test("capitalize1", () => {
  expect(capitalize("lower")).toBe("Lower");
});

test("capitalize2", () => {
  expect(capitalize("2fast")).toBe("2fast");
});

test("capitalize3", () => {
  expect(capitalize(2)).toBe("");
});
