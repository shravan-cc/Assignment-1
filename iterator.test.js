import { beforEach, describe, expect, test } from "vitest";

import {
  alphabetIterator,
  linkedListIterator,
  linkedListGenerator,
} from "./iterator";

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
/**
 * Includes tests for assignments on generators.
 */
describe("Includes Tests for assignments on generators", () => {
  let linkedList;
  /**
   * Setup before each test to initialize the linked list with sample data.
   */
  beforEach(() => {
    linkedList = linkedListIterator();
    linkedList.addItem(2);
    linkedList.addItem(4);
    linkedList.addItem(6);
  });
  /**
   * Test case for iterating through linked lists.
   * It verifies that iterating through the linked list using the spread operator results in the correct values.
   */
  test("Test for iterating through linked lists", () => {
    const linkedListValues = [...linkedList];
    expect(linkedListValues).toEqual([2, 4, 6]);
  });
  /**
   * Test case for iterating through linked lists using a generator.
   * It verifies that the generator yields the correct values for each node in the linked list.
   */
  test("Test for iterating through linked lists using generator", () => {
    const generator = linkedListGenerator(linkedList);

    expect(generator.next()).toEqual({ value: 2, done: false });
    expect(generator.next()).toEqual({ value: 4, done: false });
    expect(generator.next()).toEqual({ value: 6, done: false });
    expect(generator.next()).toEqual({ value: undefined, done: true });
  });
});
