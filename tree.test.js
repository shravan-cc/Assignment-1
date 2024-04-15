import { expect, describe, test, beforeEach, afterEach } from "vitest";

import { Tree } from "./tree";

describe("Objected Oriented Trees Tests", () => {
  let binarySearchTree;

  /**
   * Set up before each test case.
   */
  beforeEach(() => {
    binarySearchTree = new Tree();
    binarySearchTree.addItem(30);
    binarySearchTree.addItem(25);
    binarySearchTree.addItem(35);
    binarySearchTree.addItem(28);
    binarySearchTree.addItem(12);
    binarySearchTree.addItem(29);
  });

  /**
   * Clean up after each test case.
   */
  afterEach(() => {
    console.log("After each test block this is called");
    binarySearchTree = null;
  });

  /**
   * Test case for the creation of trees.
   */
  test("Creation of trees", () => {
    const treeRef = new Tree();
    expect(treeRef.createTree()).toBeDefined();
    expect(treeRef.root).toBeNull();
  });

  /**
   * Test case for adding nodes to the tree.
   */
  test("Addition of nodes to the tree", () => {
    const treeRef = new Tree();

    const treeNode1 = treeRef.addItem(30);
    expect(treeNode1.data).toEqual(30);
    expect(treeNode1.left).toBeNull();
    expect(treeNode1.right).toBeNull();

    const treeNode2 = treeRef.addItem(25);
    expect(treeNode2.data).toEqual(25);
    expect(treeNode1.left).toBe(treeNode2);
    expect(treeNode1.left.data).toEqual(25);
    expect(treeNode1.right).toBeNull();
    expect(treeNode2.left).toBeNull();
    expect(treeNode2.right).toBeNull();

    const treeNode3 = treeRef.addItem(35);
    expect(treeNode3.data).toEqual(35);
    expect(treeNode1.right).toBe(treeNode3);
    expect(treeNode1.right.data).toEqual(35);
    expect(treeNode3.left).toBeNull();
    expect(treeNode3.right).toBeNull();

    const treeNode4 = treeRef.addItem(28);
    expect(treeNode4.data).toEqual(28);
    expect(treeNode2.left).toBeNull();
    expect(treeNode2.right).toBe(treeNode4);
    expect(treeNode4.left).toBeNull();
    expect(treeNode4.right).toBeNull();
  });

  /**
   * Test case for tree traversals.
   */
  test("Traversal in trees", () => {
    let inOrderArray = binarySearchTree.inOrder(binarySearchTree.root);
    expect(inOrderArray).toEqual([12, 25, 28, 29, 30, 35]);

    const preOrderArray = binarySearchTree.preOrder(binarySearchTree.root);
    expect(preOrderArray).toEqual([30, 25, 12, 28, 29, 35]);

    const postOrderArray = binarySearchTree.postOrder(binarySearchTree.root);
    expect(postOrderArray).toEqual([12, 29, 28, 25, 35, 30]);

    // Tests for removing a particular node from the tree

    const removedNode1 = binarySearchTree.removeItem(29);
    expect(removedNode1).toEqual(29);
    inOrderArray = binarySearchTree.inOrder(binarySearchTree.root);

    // In-order traversal after removal should reflect the updated tree structure.
    expect(inOrderArray).toEqual([12, 25, 28, 30, 35]);

    const removedNode2 = binarySearchTree.removeItem(25);
    expect(removedNode2).toEqual(25);
    inOrderArray = binarySearchTree.inOrder(binarySearchTree.root);

    // In-order traversal after removal should reflect the updated tree structure.
    expect(inOrderArray).toEqual([12, 28, 30, 35]);
  });
});
