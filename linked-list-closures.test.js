import { linkedList } from "./linked-list-closures";

describe("Linked list tests using closures", () => {
  let aListWithFewItems;
  beforeEach(() => {
    console.log("before each test block");
    aListWithFewItems = linkedList();
    aListWithFewItems.addItem(1);

    // Adding another item

    aListWithFewItems.addItem(2);

    // Implemented tail

    aListWithFewItems.addItem({ name: "shravan", age: 18 });

    aListWithFewItems.addItem([0, 1, 2, 3]);
  });

  /**
   * Test case to ensure the creation of a linked list.
   */
  test("Creation of linked list", () => {
    const listRef = linkedList();
    expect(listRef).toBeDefined(); // expect(listRef).not.toBe(undefined);
  });

  /**
   * Test case to ensure adding items to the linked list.
   */
  test("Adding items to linked list", () => {
    const listRef = linkedList();
    const listNode = listRef.addItem(1);
    expect(listNode).toBeDefined();

    expect(listNode.data).toBe(1);
    expect(listNode.next).toBe(null);

    // Adding another item

    const listNode2 = listRef.addItem(2);
    expect(listNode2.data).toBe(2);
    expect(listNode2.next).toBe(null);
    expect(listNode.next).toBe(listNode2);

    const listNode3 = listRef.addItem({ name: "shravan", age: 18 });
    expect(listNode3.data).toEqual({ name: "shravan", age: 18 });
    expect(listNode3.next).toBe(null);
    expect(listNode2.next).toBe(listNode3);

    const listNode4 = listRef.addItem([0, 1, 2, 3]);
    expect(listNode4.data).toEqual([0, 1, 2, 3]);
    expect(listNode4.next).toBe(null);
    expect(listNode3.next).toBe(listNode4);
  });

  /**
   * Test case to ensure transformation operations on the linked list.
   */
  test("Transformation of Linked Lists", () => {
    let listAsArray = aListWithFewItems.arrayFromList();
    expect(listAsArray).toEqual([
      1,
      2,
      { name: "shravan", age: 18 },
      [0, 1, 2, 3],
    ]);

    aListWithFewItems.removeFromEnd();
    listAsArray = aListWithFewItems.arrayFromList();
    expect(listAsArray).toEqual([1, 2, { name: "shravan", age: 18 }]);

    const listNode2 = aListWithFewItems.getNode(2);
    const listNode5 = aListWithFewItems.insertAfter(listNode2, "shravan");
    expect(listNode5.data).toEqual("shravan");
    listAsArray = aListWithFewItems.arrayFromList();
    expect(listAsArray).toEqual([
      1,
      2,
      "shravan",
      { name: "shravan", age: 18 },
    ]);

    const listNodeBefore = aListWithFewItems.insertBefore(
      listNode5,
      "Inserted Before"
    );
    expect(listNodeBefore.data).toEqual("Inserted Before");
    expect(listNodeBefore.next).toBe(listNode5);
    listAsArray = aListWithFewItems.arrayFromList();
    expect(listAsArray).toEqual([
      1,
      2,
      "Inserted Before",
      "shravan",
      { name: "shravan", age: 18 },
    ]);

    aListWithFewItems.removeItem("Inserted Before");
    listAsArray = aListWithFewItems.arrayFromList();
    expect(listAsArray).toEqual([
      1,
      2,
      "shravan",
      { name: "shravan", age: 18 },
    ]);

    function isInteger(num) {
      return Number.isInteger(num);
    }
    const filteredArray = aListWithFewItems.filterArray(isInteger);
    expect(filteredArray).toEqual([1, 2]);
  });
});
