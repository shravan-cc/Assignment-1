import { describe, expect, test } from "vitest";

import { alphabetIterator } from "./iterator";

/**
 * Test suite for the iterator functionality.
 */
describe("Assignment questions test on iterators", () => {
  /**
   * Test case for iterating through alphabets using a while loop.
   */
  test("Test for iterating through alphabets using while loop", () => {
    const iterator = alphabetIterator[Symbol.iterator]();
    let expectedCharCode = "a".codePointAt(0);
    while (true) {
      const alphabets = iterator.next();
      if (alphabets.done) {
        break;
      }
      const expectedValue = String.fromCharCode(expectedCharCode++);
      expect(alphabets.value).toEqual(expectedValue);
    }
  });
  /**
   * Test case for iterating through alphabets using a for...of loop.
   */
  test("Test for iterating through alphabets using for of", () => {
    let expectedCharCode = "a".codePointAt(0);
    for (const alphabets of alphabetIterator) {
      const expectedValue = String.fromCharCode(expectedCharCode++);
      expect(alphabets).toEqual(expectedValue);
    }
  });
  /**
   * Test case for converting the iterator into an array of alphabets.
   */
  test("Testing of iterating through alphabet and returning it as an array", () => {
    const alphabetArray = [...alphabetIterator];
    expect(alphabetArray).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]);
  });
});
