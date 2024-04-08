import assert from "assert";

function fibonacci(index) {
  // Pre-Conditions
  assert(index >= 0, "Argument must be greater than or equal to zero");
  assert(Number.isInteger(index), "Arguement must be an integer");
  assert(index < 102, "Arguement is too large");
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }
  let first = 0;
  let second = 1;
  let next;
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= index; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
}
assert.deepStrictEqual(fibonacci(0), 0, "Fibonacci number of 0 is 0");
assert.deepStrictEqual(fibonacci(1), 1, "Fibonacci number of 1 is 1");
assert.deepStrictEqual(fibonacci(2), 1, "Fibonacci number of 2 is 1");
assert.deepStrictEqual(fibonacci(3), 2, "Fibonacci number of 3 is 2");
assert.deepStrictEqual(fibonacci(4), 3, "Fibonacci number of 4 is 3");
assert.deepStrictEqual(fibonacci(5), 5, "Fibonacci number of 5 is 5");
assert.deepStrictEqual(fibonacci(6), 8, "Fibonacci number of 6 is 8");
assert.deepStrictEqual(fibonacci(7), 13, "Fibonacci number of 7 is 13");
assert.deepStrictEqual(fibonacci(8), 21, "Fibonacci number of 8 is 21");
assert.deepStrictEqual(fibonacci(9), 34, "Fibonacci number of 9 is 34");
assert.deepStrictEqual(fibonacci(10), 55, "Fibonacci number of 10 is 55");
assert.deepStrictEqual(fibonacci(20), 6765, "Fibonacci number of 20 is 6765");
assert.deepStrictEqual(
  fibonacci(30),
  832040,
  "Fibonacci number of 30 is 832040"
);
assert.deepStrictEqual(
  fibonacci(100),
  354224848179262000000,
  "Fibonacci number of 100 is 354224848179262000000"
);
assert.throws(() => fibonacci("string"), Error);
assert.throws(() => fibonacci(4.5), Error);
assert.throws(() => fibonacci(), Error);
assert.throws(() => fibonacci(-2), Error);
assert.throws(() => fibonacci(103), Error);
