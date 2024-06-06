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
/**
 * Creates a node for the linked list.
 *
 * @param {any} data - The data to be stored in the node.
 * @returns {Object} A node object with `data` and `next` properties.
 */
function createNode(data) {
  return {
    data,
    next: null,
  };
}
/**
 * Creates an iterable linked list with methods to add items and iterate through the list.
 *
 * @returns {Object} An iterable linked list object with methods `addItem` and an iterator.
 */
export function linkedListIterator() {
  return {
    head: null,
    tail: null,
    /**
     * Adds a new item to the linked list.
     *
     * @param {any} data - The data to be added to the linked list.
     */
    addItem(data) {
      const newNode = createNode(data);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    },
    /**
     * Provides an iterator to iterate through the linked list.
     *
     * @returns {Object} An iterator object for the linked list.
     */
    [Symbol.iterator]() {
      let currentNode = this.head;
      return {
        next() {
          if (currentNode !== null) {
            const value = currentNode.data;
            currentNode = currentNode.next;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
/**
 * A generator function to iterate through a linked list.
 *
 * @param {Object} linkedList - The linked list object to iterate through.
 * @returns {Generator} A generator that yields the data of each node in the linked list.
 */
export function* linkedListGenerator(linkedList) {
  let currentValue = linkedList.head;
  while (currentValue !== null) {
    yield currentValue.data;
    currentValue = currentValue.next;
  }
}
