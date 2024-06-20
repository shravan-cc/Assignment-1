/**
 * Generates the Fibonacci series up to the specified number.
 * @param num The number specifying how many Fibonacci numbers to generate.
 * @returns An array containing the Fibonacci series up to the specified number.
 */
export function generateFibocacciSeries(num) {
    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
/**
 * Applies a transformation function to each element in an array and returns a new array with the transformed elements.
 * @param array - The array of elements to be transformed.
 * @param transform - The transformation function to apply to each element.
 * @returns A new array with the transformed elements.
 */
export function map(array, transform) {
    const mappedArray = [];
    for (const items of array) {
        mappedArray.push(transform(items));
    }
    return mappedArray;
}
/**
 * Filters an array based on a predicate function and returns a new array with the elements that satisfy the predicate.
 * @param array - The array of elements to be filtered.
 * @param predicate - The predicate function to apply to each element.
 * @returns A new array with the elements that satisfy the predicate.
 */
export function filter(array, predicate) {
    const filteredArray = [];
    for (const item of array) {
        if (predicate(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}
/**
 * Reduces an array to a single value by applying a reducer function to each element, starting with an initial value.
 * @param array - The array of elements to be reduced.
 * @param reducer - The reducer function to apply to each element.
 * @param initialValue - The initial value to start the reduction.
 * @returns The final reduced value.
 */
export function reduce(array, reducer, initialValue) {
    let accumulator = initialValue;
    for (const item of array) {
        accumulator = reducer(accumulator, item);
    }
    return accumulator;
}
/**
 * Defines an expectation object for asserting equality of numbers.
 * @param value - The actual value to test against expected values.
 * @returns An expectation object with methods to assert equality and inequality.
 */
export function vitestExpect(value) {
    return {
        /**
         * Asserts that the current value is strictly equal to the expected value.
         * @param expected - The expected value for comparison.
         * @throws Error if the current value does not match the expected value.
         */
        toBe: (expected) => {
            if (value !== expected) {
                throw new Error(`${value} expected to be ${expected}`);
            }
        },
        /**
         * Asserts that the current value is strictly not equal to the expected value.
         * @param expected - The value expected to be different from the current value.
         * @throws Error if the current value matches the expected value.
         */
        not: {
            toBe: (expected) => {
                if (value === expected) {
                    throw new Error(`${value} not expected to be ${expected}`);
                }
            },
        },
    };
}
export function processQuery(query) {
    if (isHighLevelQuery(query)) {
        return processedHighQuery(query);
    }
    else {
        return processedLowQuery(query);
    }
}
/**
 * Checks if the provided query object is a HighLevelQuery.
 * @param query - The query object to check.
 * @returns True if the query is a HighLevelQuery, false otherwise.
 */
function isHighLevelQuery(query) {
    return (query.firstName !== undefined &&
        query.lastName !== undefined);
}
/**
 * Processes a HighLevelQuery to return a ShallowResult.
 * @param query - The HighLevelQuery object to process.
 * @returns A ShallowResult containing the concatenated first name and last name.
 */
function processedHighQuery(query) {
    return {
        name: `${query.firstName} ${query.lastName}`,
    };
}
/**
 * Processes a LowLevelQuery to return a DeepResult.
 * @param query - The LowLevelQuery object to process.
 * @returns A DeepResult containing the final ID after adding 2 to the original ID.
 */
function processedLowQuery(query) {
    return {
        finalId: query.id + 2,
    };
}
export const address = {
    doorNumber: 1,
    street1: "kavoor",
    city: "mangalore",
    state: "karnataka",
    website: "google.com",
    country: "india",
};
/**
 * Represents a node in a linked list.
 * @template T The type of data stored in the node.
 */
class Node {
    data;
    next;
    /**
     * Creates an instance of Node.
     * @param data The data to be stored in the node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Represents a singly linked list.
 * @template T The type of data stored in the list.
 */
export class LinkedList {
    head;
    tail;
    /**
     * Initializes an empty linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
     * Adds a new node with the specified data to the end of the linked list.
     * @param data The data to be added to the list.
     * @returns The newly created node.
     */
    addItem(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let lastNode = this.head;
            while (lastNode.next !== null) {
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
            this.tail = newNode;
        }
        return newNode;
    }
    /**
     * Removes the first occurrence of a node with the specified data from the linked list.
     * @param data The data to be removed from the list.
     * @returns The removed node, or null if no node was found.
     */
    removeItem(data) {
        if (this.head === null || data === null) {
            return null;
        }
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return null;
        }
        if (this.head.data === data) {
            const removedNode = this.head;
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return removedNode;
        }
        let prevNode = null;
        let lastNode = this.head;
        while (lastNode !== null) {
            if (lastNode.data === data) {
                if (prevNode !== null) {
                    prevNode.next = lastNode.next;
                }
                if (lastNode.next === null) {
                    this.tail = prevNode;
                }
                return lastNode;
            }
            prevNode = lastNode;
            lastNode = lastNode.next;
        }
        return null;
    }
}
