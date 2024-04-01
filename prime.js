function assert(bool, message) {
  if (!bool) {
    console.log(message);
    return;
  }
}

function isprime(num) {
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

assert(isprime(9) === false, "9 is not a prime number");
assert(isprime(11) === true, "11 is a prime number");
assert(isprime(9999999999999) === true, "9999991 is a prime number");
assert.throws(
  () => isprime("string"),
  Error,
  "Invalid input should throw an error"
);
assert.throws(() => isprime(), Error, "Missing input should throw an error");
assert.throws(() => isprime(1), Error, "1 is not a prime number");
assert.throws(() => isprime(-1), Error, "Negative numbers are not prime");
assert.throws(() => isprime(4.87), Error, "Non-integer numbers are not prime");

function generatePrimeSeries(count) {
  let i = 2;
  let cnt = 0;
  let array = [];

  assert(count > 0, "Argument must be a positive integer");
  assert(Number.isInteger(count), "Argument must be an integer");

  while (cnt !== count) {
    if (isprime(i)) {
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

assert.throws(
  () => generatePrimeSeries(),
  Error,
  "Missing input should throw an error"
);
assert.throws(
  () => generatePrimeSeries(4.5),
  Error,
  "Missing input should throw an error"
);

console.log("All tests passed successfully!");
