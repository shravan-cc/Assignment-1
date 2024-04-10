import { expect, describe, test, beforeEach, afterEach, vi } from "vitest";
import {
  createList,
  addItemToList,
  arrayFromList,
  removeFromEnd,
  insertAfter,
  insertBefore,
  removeItem,
  filterArray,
  getNode,
  traverse,
  List,
} from "./linked-list";

describe("Structural Linked List tests", () => {
  // create tests,adding items and removing items
  let aListWithFewItems;
  beforeEach(() => {
    console.log("before each test block");
    aListWithFewItems = createList();
    addItemToList(aListWithFewItems, 1);

    // Adding another item

    addItemToList(aListWithFewItems, 2);

    // Implemented tail

    addItemToList(aListWithFewItems, { name: "shravan", age: 18 });

    addItemToList(aListWithFewItems, [0, 1, 2, 3]);
  });
  afterEach(() => {
    console.log("After each test block this is called");
    aListWithFewItems = null;
  });

  test("Creation tests", () => {
    // Test creation of linked list
    const listRef = createList();
    expect(listRef).toBeDefined(); // expect(listRef).not.toBe(undefined);
    expect(listRef.head).toBeNull();
  });

  test("Adding items", () => {
    // Test addition of items into the list
    const listRef = createList();
    const listNode = addItemToList(listRef, 1);
    expect(listNode).toBeDefined();
    expect(listRef.head).toBe(listNode);

    expect(listNode.data).toBe(1);
    expect(listNode.next).toBe(null);

    // Adding another item

    const listNode2 = addItemToList(listRef, 2);
    expect(listNode2.data).toBe(2);
    expect(listNode2.next).toBe(null);
    expect(listNode.next).toBe(listNode2);

    expect(listRef.tail.data).toEqual(2); // Implemented tail

    const listNode3 = addItemToList(listRef, { name: "shravan", age: 18 });
    expect(listNode3.data).toEqual({ name: "shravan", age: 18 });
    expect(listNode3.next).toBe(null);
    expect(listNode2.next).toBe(listNode3);

    const listNode4 = addItemToList(listRef, [0, 1, 2, 3]);
    expect(listNode4.data).toEqual([0, 1, 2, 3]);
    expect(listNode4.next).toBe(null);
    expect(listNode3.next).toBe(listNode4);
  });

  test("Transformation of items", () => {
    // Lets test that list can give us a array representation

    let listAsArray = arrayFromList(aListWithFewItems);
    expect(listAsArray).toEqual([
      1,
      2,
      { name: "shravan", age: 18 },
      [0, 1, 2, 3],
    ]);

    // Implemented remove from end
    removeFromEnd(aListWithFewItems);
    expect(aListWithFewItems.tail.data).toEqual({ name: "shravan", age: 18 }); // Implemented tail
    listAsArray = arrayFromList(aListWithFewItems);
    expect(listAsArray).toEqual([1, 2, { name: "shravan", age: 18 }]);

    // Implemented inserting node after a certain node in linked list
    const listNode2 = getNode(aListWithFewItems, 2);
    const listNode5 = insertAfter(aListWithFewItems, listNode2, "shravan");
    expect(listNode5.data).toEqual("shravan");
    listAsArray = arrayFromList(aListWithFewItems);
    expect(listAsArray).toEqual([
      1,
      2,
      "shravan",
      { name: "shravan", age: 18 },
    ]);

    // Implemented inserting node before a certain node in linked list

    const listNodeBefore = insertBefore(
      aListWithFewItems,
      listNode5,
      "Inserted Before"
    );
    expect(listNodeBefore.data).toEqual("Inserted Before");
    expect(listNodeBefore.next).toBe(listNode5);
    listAsArray = arrayFromList(aListWithFewItems);
    expect(listAsArray).toEqual([
      1,
      2,
      "Inserted Before",
      "shravan",
      { name: "shravan", age: 18 },
    ]);

    // Implemented removing an item from a certain position

    removeItem(aListWithFewItems, "Inserted Before");
    listAsArray = arrayFromList(aListWithFewItems);
    expect(listAsArray).toEqual([
      1,
      2,
      "shravan",
      { name: "shravan", age: 18 },
    ]);

    // Implemented list from an array

    const listFromArray = createList([1, 2, 3]);
    expect(listFromArray.head.data).toEqual(1);
    expect(listFromArray.head.next.data).toEqual(2);
    expect(listFromArray.tail.data).toEqual(3);

    // Implementing filter function
    function isInteger(num) {
      return Number.isInteger(num);
    }
    const filteredArray = filterArray(aListWithFewItems, isInteger);
    expect(filteredArray).toEqual([1, 2]);

    // Implementing creating list from list
    const list2 = createList([2, 4, 6, 8]);
    const listFromList = createList(list2);
    expect(list2).toEqual(listFromList);

    const list3 = createList([2, 4, 6, 8]);
    const listFromList1 = createList(list3);
    expect(list3).toEqual(listFromList1);
  });

  test("traverse linked list", () => {
    const mockFunction = vi.fn();
    traverse(aListWithFewItems, mockFunction);
    expect(mockFunction.mock.calls.length).toEqual(4);
  });
});

describe("OOP Linked List tests", () => {
  let listRef;
  beforeEach(() => {
    listRef = new List();
    listRef.addItem("shravan");
    listRef.addItem(1);
    listRef.addItem(2);
    listRef.addItem([0, 1, 2, 3]);
  });

  afterEach(() => {
    console.log("After each test block this is called");
    listRef = null;
  });

  test("Creating list", () => {
    const createdList = new List();
    expect(createdList).toBeDefined(); // expect(listRef).not.toBe(undefined);
    expect(createdList.head).toBeNull();
  });

  test("Adding items", () => {
    const listNode1 = listRef.addItem("shravan");
    expect(listNode1.data).toEqual("shravan");
    expect(listNode1.next).toBe(null);

    const listNode2 = listRef.addItem(1);
    expect(listNode2.data).toEqual(1);
    expect(listNode1.next).toBe(listNode2);

    const listNode3 = listRef.addItem(2);
    expect(listNode3.data).toEqual(2);
    expect(listNode2.next).toBe(listNode3);

    const listNode4 = listRef.addItem([0, 1, 2, 3]);
    expect(listNode4.data).toEqual([0, 1, 2, 3]);
    expect(listNode3.next).toBe(listNode4);
  });

  test("Transformation of Linked Lists", () => {
    // Tests for array from list
    const listAsArray = listRef.arrayFromList();
    expect(listAsArray).toEqual(["shravan", 1, 2, [0, 1, 2, 3]]);

    // Inserting element after a particular node
    const listnode2 = listRef.getNode(1);
    const listNode5 = listRef.insertAfter(listnode2, "Added to 3rd place");
    expect(listNode5.data).toEqual("Added to 3rd place");
    expect(listRef.arrayFromList()).toEqual([
      "shravan",
      1,
      "Added to 3rd place",
      2,
      [0, 1, 2, 3],
    ]);

    // Inserting element before a particular node
    const listnode3 = listRef.getNode("Added to 3rd place");
    const listNode6 = listRef.insertBefore(listnode3, "Added to 2nd place");
    expect(listNode6.data).toEqual("Added to 2nd place");
    expect(listRef.arrayFromList()).toEqual([
      "shravan",
      1,
      "Added to 2nd place",
      "Added to 3rd place",
      2,
      [0, 1, 2, 3],
    ]);

    // Removing node from the end
    const removedNode = listRef.removeFromEnd();
    expect(removedNode.data).toEqual([0, 1, 2, 3]);
    expect(listRef.arrayFromList()).toEqual([
      "shravan",
      1,
      "Added to 2nd place",
      "Added to 3rd place",
      2,
    ]);
    expect(listRef.tail.data).toEqual(2); // Tail Implementation

    // Removing node by using data
    const removedNode1 = listRef.removeItem("Added to 3rd place");
    expect(removedNode1.data).toEqual("Added to 3rd place");
    expect(listRef.arrayFromList()).toEqual([
      "shravan",
      1,
      "Added to 2nd place",
      2,
    ]);

    // Implemented list from array
    const listFromArray = createList([1, 2, 3]);
    expect(listFromArray.head.data).toEqual(1);
    expect(listFromArray.head.next.data).toEqual(2);
    expect(listFromArray.tail.data).toEqual(3);

    // Filtering array
    function isInteger(num) {
      return Number.isInteger(num);
    }
    const filteredArray = listRef.filterArray(isInteger);
    expect(filteredArray).toEqual([1, 2]);

    // Implementing creating list from list
    const list2 = createList([2, 4, 6, 8]);
    const listFromList = createList(list2);
    expect(list2).toEqual(listFromList);

    const list3 = createList([2, 4, 6, 8]);
    const listFromList1 = createList(list3);
    expect(list3).toEqual(listFromList1);
  });

  test("traverse linked list", () => {
    const mockFunction = vi.fn();
    listRef.traverse(mockFunction);
    expect(mockFunction.mock.calls.length).toEqual(4);
    const { calls } = mockFunction.mock;
    expect(calls[0][0]).toBe("shravan");
    expect(calls[1][0]).toBe(1);
    expect(calls[2][0]).toBe(2);
    expect(calls[3][0]).toEqual([0, 1, 2, 3]);
  });
});
// insertAfter(listNode,data)
// insertBefore(listNode,data)
