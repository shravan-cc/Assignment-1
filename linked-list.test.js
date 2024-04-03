import { expect, test } from "vitest";
import { createList } from "./linked-list";
import {
  addItemToList,
  arrayFromList,
  removeFromEnd,
  insertAfter,
  insertBefore,
  removeItem,
  filterArray,
} from "./linked-list";
test("Linked List tests", () => {
  //Test creation of linked list
  const listRef = createList();
  expect(listRef).toBeDefined(); //expect(listRef).not.toBe(undefined);
  expect(listRef.head).toBeNull();

  //Test addition of items into the list
  const listNode = addItemToList(listRef, 1);
  expect(listNode).toBeDefined();
  expect(listRef.head).toBe(listNode);

  expect(listNode.data).toBe(1);
  expect(listNode.next).toBe(null);

  //Adding another item

  const listNode2 = addItemToList(listRef, 2);
  expect(listNode2.data).toBe(2);
  expect(listNode2.next).toBe(null);
  expect(listNode.next).toBe(listNode2);

  expect(listRef.tail.data).toEqual(2); //Implemented tail

  const listNode3 = addItemToList(listRef, { name: "shravan", age: 18 });
  expect(listNode3.data).toEqual({ name: "shravan", age: 18 });
  expect(listNode3.next).toBe(null);
  expect(listNode2.next).toBe(listNode3);

  const listNode4 = addItemToList(listRef, [0, 1, 2, 3]);
  expect(listNode4.data).toEqual([0, 1, 2, 3]);
  expect(listNode4.next).toBe(null);
  expect(listNode3.next).toBe(listNode4);

  //Lets test that list can give us a array representation

  let listAsArray = arrayFromList(listRef);
  expect(listAsArray).toEqual([
    1,
    2,
    { name: "shravan", age: 18 },
    [0, 1, 2, 3],
  ]);

  //Implemented remove from end
  removeFromEnd(listRef);
  expect(listRef.tail.data).toEqual({ name: "shravan", age: 18 }); //Implemented tail
  listAsArray = arrayFromList(listRef);
  expect(listAsArray).toEqual([1, 2, { name: "shravan", age: 18 }]);

  //Implemented inserting node after a certain node in linked list

  const listNode5 = insertAfter(listRef, listNode2, "shravan");
  expect(listNode5.data).toEqual("shravan");
  listAsArray = arrayFromList(listRef);
  expect(listAsArray).toEqual([1, 2, "shravan", { name: "shravan", age: 18 }]);

  //Implemented inserting node before a certain node in linked list

  const listNodeBefore = insertBefore(listRef, listNode5, "Inserted Before");
  expect(listNodeBefore.data).toEqual("Inserted Before");
  expect(listNodeBefore.next).toBe(listNode5);
  listAsArray = arrayFromList(listRef);
  expect(listAsArray).toEqual([
    1,
    2,
    "Inserted Before",
    "shravan",
    { name: "shravan", age: 18 },
  ]);

  //Implemented removing an item from a certain position

  removeItem(listRef, "Inserted Before");
  listAsArray = arrayFromList(listRef);
  expect(listAsArray).toEqual([1, 2, "shravan", { name: "shravan", age: 18 }]);

  //Implemented list from an array

  const listFromArray = createList([1, 2, 3]);
  expect(listFromArray.head.data).toEqual(1);
  expect(listFromArray.head.next.data).toEqual(2);
  expect(listFromArray.tail.data).toEqual(3);

  //Implementing filter function
  function isInteger(num) {
    return Number.isInteger(num);
  }
  const filteredArray = filterArray(listRef, isInteger);
  expect(filteredArray).toEqual([1, 2]);

  //Implementing creating list from list
  const list2 = createList([2, 4, 6, 8]);
  const listFromList = createList(list2);
  expect(list2).toEqual(listFromList);

  const list3 = createList([2, 4, 6, 8]);
  const listFromList1 = createList(list3);
  expect(list3).toEqual(listFromList1);
});

//insertAfter(listNode,data)
//insertBefore(listNode,data)
