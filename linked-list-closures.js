const assert = require("assert");

/**
 * Function to create a new node for the linked list.
 * @param {*} data - Data to be stored in the node.
 * @returns {Object} - New node object.
 */
function createNode(data) {
  return {
    data,
    next: null,
  };
}

/**
 * Function to create a linked list.
 * @returns {Object} - Object containing various linked list operations.
 */
export function linkedList() {
  let head = null;
  let tail = null;

  /**
   * Adds a new item to the end of the linked list.
   * @param {*} data - Data to be added to the linked list.
   * @returns {Object} - New node added to the linked list.
   */
  const addItem = (data) => {
    assert(data !== undefined && data !== null, "data cannot be empty");
    const newNode = createNode(data);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    return newNode;
  };

  /**
   * Creates a linked list from an array or another linked list.
   * @param {Array|Object} dataArrayOrList - Array or linked list object to create the list from.
   * @returns {Object} - New linked list object.
   */
  const createList = (dataArrayOrList) => {
    if (Array.isArray(dataArrayOrList)) {
      if (dataArrayOrList.length === 0) {
        head = null;
        tail = null;
      }

      const list1 = linkedList();
      let lastNode = null;

      for (let i = 0; i < dataArrayOrList.length; i++) {
        const newNode = createNode(dataArrayOrList[i]);

        if (!head) {
          head = newNode;
          lastNode = newNode;
          tail = newNode;
        } else {
          lastNode.next = newNode;
          lastNode = newNode;
          tail = newNode;
        }
      }

      return list1;
    }
    if (dataArrayOrList && dataArrayOrList.head) {
      const list = linkedList();
      let currentListNode = dataArrayOrList.head;

      while (currentListNode) {
        const newNode = createNode(currentListNode.data);

        if (!head) {
          head = newNode;
          tail = newNode;
        } else {
          tail.next = newNode;
          tail = newNode;
        }

        currentListNode = currentListNode.next;
      }

      return list;
    }
    return { head: null, tail: null };
  };

  /**
   * Traverses the linked list and applies a function to each node.
   * @param {Function} predicate - Function to be applied to each node.
   */
  const traverseList = (predictate) => {
    let node = head;
    while (node) {
      predictate(node);
      node = node.next;
    }
  };

  /**
   * Converts the linked list to an array.
   * @returns {Array} - Array representation of the linked list.
   */
  const arrayFromList = () => {
    const array = [];
    traverseList((node) => array.push(node.data));
    return array;
  };

  /**
   * Removes the last node from the linked list.
   * @returns {Object|null} - Removed node, or null if the list is empty.
   */
  const removeFromEnd = () => {
    if (head === null) {
      return null;
    }
    let prevNode = null;
    let lastNode = head;
    while (lastNode.next !== null) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    const removedNode = prevNode.next;
    prevNode.next = null;
    tail = prevNode;

    return removedNode;
  };

  /**
   * Finds and returns a node with a specific data value.
   * @param {*} data - Data to search for in the linked list.
   * @returns {Object|null} - Node with the specified data, or null if not found.
   */
  const getNode = (data) => {
    if (head === null) {
      return null;
    }
    let lastNode = head;
    while (lastNode !== null) {
      if (lastNode.data === data) {
        return lastNode;
      }
      lastNode = lastNode.next;
    }
    return null;
  };

  /**
   * Inserts a new node with specified data after a given node in the linked list.
   * @param {Object} listNode - The node after which the new node will be inserted.
   * @param {*} data - Data to be stored in the new node.
   * @returns {Object|null} - New node inserted, or null if either the list is empty or the provided node is null.
   */
  const insertAfter = (listNode, data) => {
    if (head === null || listNode === null) {
      return null;
    }

    const newNode = createNode(data);

    let lastNode = head;
    while (lastNode !== null) {
      if (lastNode === listNode) {
        newNode.next = lastNode.next;
        lastNode.next = newNode;
        return newNode;
      }
      lastNode = lastNode.next;
    }

    return null;
  };

  /**
   * Inserts a new node with specified data before a given node in the linked list.
   * @param {Object} listNode - The node before which the new node will be inserted.
   * @param {*} data - Data to be stored in the new node.
   * @returns {Object|null} - New node inserted, or null if either the list is empty or the provided node is null.
   */
  const insertBefore = (listNode, data) => {
    if (head === null || listNode === null) {
      return null;
    }
    const newNode = createNode(data);
    let lastNode = head;
    while (lastNode !== null) {
      if (lastNode.next === listNode) {
        newNode.next = lastNode.next;
        lastNode.next = newNode;
        return newNode;
      }
      lastNode = lastNode.next;
    }
    return null;
  };

  /**
   * Removes the first occurrence of a node with specified data from the linked list.
   * @param {*} data - Data to be removed from the linked list.
   * @returns {Object|null} - Removed node, or null if either the list is empty or the data is not found.
   */
  const removeItem = (data) => {
    if (head === null || data === null) {
      return null;
    }
    if (head.next === null) {
      head = null;
      tail = null;

      return null;
    }
    let prevNode = null;
    let lastNode = head;
    while (lastNode !== null) {
      if (lastNode.data === data) {
        prevNode.next = lastNode.next;
        return lastNode;
      }
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    return null;
  };

  /**
   * Filters the elements of the linked list based on a predicate function.
   * @param {Function} predicate - Function that returns true or false based on the element's data.
   * @returns {Array} - Array containing the data of the elements that satisfy the predicate.
   */
  const filterArray = (predicate) => {
    const array = [];
    let lastNode = head;
    while (lastNode !== null) {
      if (predicate(lastNode.data)) {
        array.push(lastNode.data);
      }
      lastNode = lastNode.next;
    }
    return array;
  };
  return {
    addItem,
    createList,
    arrayFromList,
    removeFromEnd,
    insertAfter,
    getNode,
    insertBefore,
    removeItem,
    filterArray,
  };
}
