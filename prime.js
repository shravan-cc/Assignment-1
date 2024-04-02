import assert from "assert";
export function isPrime(num) {
  // Pre-Conditions
  assert(typeof num === "number", "Argument must be a number");
  assert(num > 1, "Argument must be greater than 1");
  assert(Number.isInteger(num), "Argument must be an integer");

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

assert(isPrime(9) === false, "The given  number is not prime number");
assert(isPrime(11) === true, "The given  number is prime number");
assert(isPrime(9999991) === true, "The given  number is prime number");
assert.throws(() => isPrime("string"), Error);
assert.throws(() => isPrime(), Error);
assert.throws(() => isPrime(1), Error);
assert.throws(() => isPrime(-1), Error);
assert.throws(() => isPrime(4.87), Error);

export function generatePrimeSeries(count) {
  let i = 2;
  let cnt = 0;
  let array = [];

  assert(count > 0, "Argument must be a positive integer");
  assert(Number.isInteger(count), "Argument must be an integer");

  while (cnt !== count) {
    if (isPrime(i)) {
      cnt++;
      array.push(i);
    }
    i++;
  }
  return array;
}

assert.deepEqual(
  generatePrimeSeries(5),
  [2, 3, 5, 7, 11],
  "The first series should be generated correctly"
);
assert.deepEqual(
  generatePrimeSeries(6),
  [2, 3, 5, 7, 11, 13],
  "The first series should be generated correctly"
);
assert.deepStrictEqual(
  generatePrimeSeries(10),
  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
  "Generated prime series for count 10 is incorrect"
);
assert.throws(() => generatePrimeSeries(), Error);
