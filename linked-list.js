export function createList(arrayOrList = []) {
  if (Array.isArray(arrayOrList)) {
    if (arrayOrList.length === 0) {
      return { head: null, tail: null };
    }

    const list1 = { head: null, tail: null };
    let lastNode = null;

    for (let i = 0; i < arrayOrList.length; i++) {
      const newNode = { data: arrayOrList[i], next: null };

      if (list1.head === null) {
        list1.head = newNode;
        lastNode = newNode;
        list1.tail = newNode;
      } else {
        lastNode.next = newNode;
        lastNode = newNode;
        list1.tail = newNode;
      }
    }

    return list1;
  }
  if (arrayOrList && arrayOrList.head) {
    const list = { head: null, tail: null };
    let currentListNode = arrayOrList.head;

    while (currentListNode) {
      const newNode = { data: currentListNode.data, next: null };

      if (!list.head) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        list.tail.next = newNode;
        list.tail = newNode;
      }

      currentListNode = currentListNode.next;
    }

    return list;
  }
  return { head: null, tail: null };
}

/**
 * adds data into a fresh node towards the end of the list
 */

export function addItemToList(listRef, data) {
  const newNode = { data, next: null };
  const newListRef = listRef;
  if (newListRef.head === null) {
    newListRef.head = newNode;
  } else {
    let lastNode = newListRef.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
    newListRef.tail = newNode;
  }

  return newNode;
}
export function arrayFromList(listRef) {
  const array = [];
  let lastNode = listRef.head;
  while (lastNode.next !== null) {
    array.push(lastNode.data);
    lastNode = lastNode.next;
  }
  array.push(lastNode.data);
  return array;
}

export function removeFromEnd(listRef) {
  const newListRef = listRef;
  if (newListRef.head === null) {
    return;
  }
  if (newListRef.head.next === null) {
    newListRef.head = null;
    newListRef.tail = null;
    return;
  }
  let prevNode = null;
  let lastNode = newListRef.head;
  while (lastNode.next !== null) {
    prevNode = lastNode;
    lastNode = lastNode.next;
  }
  prevNode.next = null;
  newListRef.tail = prevNode;
}

export function insertAfter(listRef, listNode, data) {
  if (listRef.head === null || listNode === null) {
    return null;
  }

  const newNode = { data, next: null };

  let lastNode = listRef.head;
  while (lastNode !== null) {
    if (lastNode === listNode) {
      newNode.next = lastNode.next;
      lastNode.next = newNode;
      return newNode;
    }
    lastNode = lastNode.next;
  }

  return null;
}

export function insertBefore(listRef, listNode, data) {
  if (listRef.head === null || listNode === null) {
    return null;
  }
  const newNode = { data, next: null };
  let lastNode = listRef.head;
  while (lastNode !== null) {
    if (lastNode.next === listNode) {
      newNode.next = lastNode.next;
      lastNode.next = newNode;
      return newNode;
    }
    lastNode = lastNode.next;
  }
  return null;
}

export function removeItem(listRef, data) {
  const newListRef = listRef;
  if (newListRef.head === null || data === null) {
    return null;
  }
  if (newListRef.head.next === null) {
    newListRef.head = null;

    newListRef.tail = null;

    return null;
  }
  let prevNode = null;
  let lastNode = newListRef.head;
  while (lastNode !== null) {
    if (lastNode.data === data) {
      prevNode.next = lastNode.next;

      return null;
    }
    prevNode = lastNode;
    lastNode = lastNode.next;
  }
  return null;
}

export function filterArray(listRef, predicate) {
  const array = [];
  let lastNode = listRef.head;
  while (lastNode !== null) {
    if (predicate(lastNode.data)) {
      array.push(lastNode.data);
    }
    lastNode = lastNode.next;
  }
  return array;
}

export function getNode(listRef, data) {
  if (listRef.head === null) {
    return null;
  }
  let lastNode = listRef.head;
  while (lastNode !== null) {
    if (lastNode.data === data) {
      return lastNode;
    }
    lastNode = lastNode.next;
  }
  return null;
}

export function traverse(listRef, visit) {
  let current = listRef.head;
  while (current) {
    visit(current.data);
    current = current.next;
  }
}

// OOP implementation

export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  createList(dataArrayOrList) {
    if (Array.isArray(dataArrayOrList)) {
      if (dataArrayOrList.length === 0) {
        this.head = null;
        this.tail = null;
      }

      const list1 = new List();
      let lastNode = null;

      for (let i = 0; i < dataArrayOrList.length; i++) {
        const newNode = new Node(dataArrayOrList[i]);

        if (!this.head) {
          this.head = newNode;
          lastNode = newNode;
          this.tail = newNode;
        } else {
          lastNode.next = newNode;
          lastNode = newNode;
          this.tail = newNode;
        }
      }

      return list1;
    }
    if (dataArrayOrList && dataArrayOrList.head) {
      const list = new List();
      let currentListNode = dataArrayOrList.head;

      while (currentListNode) {
        const newNode = new Node(currentListNode.data);

        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }

        currentListNode = currentListNode.next;
      }

      return list;
    }
    return { head: null, tail: null };
  }

  addItem(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
      this.tail = newNode;
    }

    return newNode;
  }

  arrayFromList() {
    const array = [];
    let lastNode = this.head;
    while (lastNode.next !== null) {
      array.push(lastNode.data);
      lastNode = lastNode.next;
    }
    array.push(lastNode.data);
    return array;
  }

  insertAfter(listNode, data) {
    if (this.head === null || listNode === null) {
      return null;
    }

    const newNode = new Node(data);

    let lastNode = this.head;
    while (lastNode !== null) {
      if (lastNode === listNode) {
        newNode.next = lastNode.next;
        lastNode.next = newNode;
        return newNode;
      }
      lastNode = lastNode.next;
    }

    return null;
  }

  getNode(data) {
    if (this.head === null) {
      return null;
    }
    let lastNode = this.head;
    while (lastNode !== null) {
      if (lastNode.data === data) {
        return lastNode;
      }
      lastNode = lastNode.next;
    }
    return null;
  }

  insertBefore(listNode, data) {
    if (this.head === null || listNode === null) {
      return null;
    }
    const newNode = new Node(data);
    let lastNode = this.head;
    while (lastNode !== null) {
      if (lastNode.next === listNode) {
        newNode.next = lastNode.next;
        lastNode.next = newNode;
        return newNode;
      }
      lastNode = lastNode.next;
    }
    return null;
  }

  removeFromEnd() {
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return null;
    }
    let prevNode = null;
    let lastNode = this.head;
    while (lastNode.next !== null) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    const removedNode = prevNode.next;
    prevNode.next = null;
    this.tail = prevNode;

    return removedNode;
  }

  removeItem(data) {
    if (this.head === null || data === null) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;

      return null;
    }
    let prevNode = null;
    let lastNode = this.head;
    while (lastNode !== null) {
      if (lastNode.data === data) {
        prevNode.next = lastNode.next;
        return lastNode;
      }
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    return null;
  }

  filterArray(predicate) {
    const array = [];
    let lastNode = this.head;
    while (lastNode !== null) {
      if (predicate(lastNode.data)) {
        array.push(lastNode.data);
      }
      lastNode = lastNode.next;
    }
    return array;
  }

  traverse(visit) {
    let current = this.head;
    while (current) {
      visit(current.data);
      current = current.next;
    }
  }
}
