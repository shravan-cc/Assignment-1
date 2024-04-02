import { expect, test } from "vitest";
import assert from "assert";
import { isPrime } from "./prime";
import { generatePrimeSeries } from "./prime";
test("isPrime tests", () => {
  expect(() => isPrime("string")).toThrow(Error);
  expect(() => isPrime()).toThrow(Error);
  expect(() => isPrime(1)).toThrow(Error);
  expect(() => isPrime(-1)).toThrow(Error);
  expect(() => isPrime(4.86)).toThrow(Error);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(6)).toBe(false);
});

test("generatePrimeSeries tests", () => {
  expect(generatePrimeSeries(9)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  expect(generatePrimeSeries(2)).toEqual([2, 3]);
  expect(() => generatePrimeSeries()).toThrow(Error);
});
