/* eslint-disable no-param-reassign */
export function createList(arrayOrList = []) {
  if (Array.isArray(arrayOrList)) {
    if (arrayOrList.length === 0) {
      return { head: null, tail: null };
    }

    const list1 = { head: null, tail: null };
    let lastNode = null;

    // eslint-disable-next-line no-plusplus
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
  // assert(listRef !== undefined && listRef !== null);
  const newNode = { data, next: null };
  if (listRef.head === null) {
    listRef.head = newNode;
  } else {
    let lastNode = listRef.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
    listRef.tail = newNode;
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
  if (listRef.head === null) {
    return;
  }
  if (listRef.head.next === null) {
    listRef.head = null;
    listRef.tail = null;
    return;
  }
  let prevNode = null;
  let lastNode = listRef.head;
  while (lastNode.next !== null) {
    prevNode = lastNode;
    lastNode = lastNode.next;
  }
  prevNode.next = null;
  listRef.tail = prevNode;
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

// eslint-disable-next-line consistent-return
export function removeItem(listRef, data) {
  if (listRef.head === null || data === null) {
    return null;
  }
  if (listRef.head.next === null) {
    listRef.head = null;
    // eslint-disable-next-line no-param-reassign
    listRef.tail = null;
    // eslint-disable-next-line consistent-return
    return;
  }
  let prevNode = null;
  let lastNode = listRef.head;
  while (lastNode !== null) {
    if (lastNode.data === data) {
      prevNode.next = lastNode.next;
      // eslint-disable-next-line consistent-return
      return;
    }
    prevNode = lastNode;
    lastNode = lastNode.next;
  }
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
