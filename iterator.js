/**
 * An iterator object that iterates over the English alphabet from 'a' to 'z'.
 */
export const alphabetIterator = {
  /**
   * Method to make the object iterable. It returns an iterator object with a next() method.
   * @returns {Object} An iterator object with a next() method.
   */
  [Symbol.iterator]() {
    let currentCharCode = "a".codePointAt(0);
    return {
      /**
       * Method of the iterator object. It returns the next value in the iteration sequence.
       * @returns {Object} An object containing the value of the current iteration and a boolean indicating whether the iteration is complete.
       */
      next() {
        if (currentCharCode <= "z".codePointAt(0)) {
          const value = String.fromCharCode(currentCharCode++);
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
