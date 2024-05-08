/**
 * Creates a new Node instance with the given data.
 * @param {*} data - The data to be stored in the node.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Creates a new Tree instance with an empty root.
 */
export class Tree {
  constructor(compareFunc) {
    this.root = null;
    this.compareFunc = compareFunc;
  }

  /**
   * Inserts a new node with the provided data into the binary search tree while preserving its ordering property.
   *
   * @param {*} data - The data to be stored in the new node.
   * @returns {Node} - The newly inserted node.
   */

  addItem(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }
    let currentNode = this.root;
    while (true) {
      if (this.compareFunc(currentNode.data, newNode.data) === 1) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return newNode;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return newNode;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * Performs an in-order traversal of the binary search tree starting from the given node.
   * In-order traversal visits the left subtree, then the current node, and finally the right subtree.
   *
   * @param {Node} treeNode - The starting node for the traversal.
   * @returns {Array} - An array containing the elements of the tree in sorted order.
   */

  inOrder(treeNode) {
    const inOrderArray = [];
    if (treeNode !== null) {
      inOrderArray.push(...this.inOrder(treeNode.left));
      inOrderArray.push(treeNode.data);
      inOrderArray.push(...this.inOrder(treeNode.right));
    }
    return inOrderArray;
  }

  /**
   * Performs a pre-order traversal of the binary search tree, starting from the given node.
   *
   * @param {Node} treeNode - The starting node for the traversal.
   * @returns {Array} - An array containing the nodes visited in pre-order.
   */
  preOrder(treeNode) {
    const preOrderArray = [];
    if (treeNode !== null) {
      preOrderArray.push(treeNode.data);
      preOrderArray.push(...this.preOrder(treeNode.left));
      preOrderArray.push(...this.preOrder(treeNode.right));
    }
    return preOrderArray;
  }

  /**
   * Performs a post-order traversal of the binary search tree, starting from the given node.
   *
   * @param {Node} treeNode - The starting node for the traversal.
   * @returns {Array} - An array containing the nodes visited in post-order.
   */
  postOrder(treeNode) {
    const postOrderArray = [];
    if (treeNode !== null) {
      postOrderArray.push(...this.postOrder(treeNode.left));
      postOrderArray.push(...this.postOrder(treeNode.right));
      postOrderArray.push(treeNode.data);
    }
    return postOrderArray;
  }

  /**
   * Removes a node containing the specified data from the binary search tree.
   *
   * @param {any} data - The data to be removed from the tree.
   * @returns {any|null} - The removed data, or null if the data is not found in the tree.
   */

  removeItem(data) {
    if (this.root === null || data === null) {
      return null;
    }
    let parentNode = null;
    let currentNode = this.root;
    if (currentNode.left === null && currentNode.right === null) {
      this.root = null;
      return null;
    }
    while (currentNode !== null) {
      if (currentNode.data === data) {
        if (currentNode.left === null && currentNode.right === null) {
          if (parentNode === null) {
            this.root = null;
          } else if (parentNode.left === currentNode) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
          return currentNode.data;
        }
        if (currentNode.left !== null && currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left;
          } else {
            parentNode.right = currentNode.left;
          }
          return currentNode.data;
        }
        if (currentNode.left === null && currentNode.right !== null) {
          if (parentNode === null) {
            this.root = currentNode.right;
          } else if (parentNode.left === currentNode) {
            parentNode.left = currentNode.right;
          } else {
            parentNode.right = currentNode.right;
          }
          return currentNode.data;
        }
        if (currentNode.left !== null && currentNode.right !== null) {
          if (parentNode === null) {
            this.root = currentNode.right;
            this.root.left = currentNode.left;
          } else if (parentNode.left === currentNode) {
            const left1 = currentNode.left.data;
            const right1 = currentNode.right.data;
            const maxNode =
              left1 > right1 ? currentNode.left : currentNode.right;
            const minNode =
              left1 < right1 ? currentNode.left : currentNode.right;
            parentNode.left = maxNode;
            maxNode.left = minNode;
          } else {
            const left1 = currentNode.left.data;
            const right1 = currentNode.right.data;
            const maxNode =
              left1 > right1 ? currentNode.left : currentNode.right;
            const minNode =
              left1 < right1 ? currentNode.left : currentNode.right;
            parentNode.right = maxNode;
            maxNode.right = minNode;
          }
          return currentNode.data;
        }
      } else if (this.compareFunc(currentNode.data, data) === 1) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}
