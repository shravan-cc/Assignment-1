import assert from "assert";
function isprime(num) {
  //Pre-Conditions
  if (typeof num !== "number" || num <= 1 || !Number.isInteger(num)) {
    throw new Error("Arguement must be a valid integer greater than 1");
  }
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

assert(isprime(9) === false, "The given  number is not prime number");
assert(isprime(11) === true, "The given  number is prime number");
assert.throws(() => isprime("string"), Error);
assert.throws(() => isprime(), Error);
assert.throws(() => isprime(1), Error);
assert.throws(() => isprime(-1), Error);
assert.throws(() => isprime(4.87), Error);

function generateprimeseries(count) {
  let i = 2;
  let cnt = 0;
  let array = [];
  if (typeof count !== "number" || !Number.isInteger(count)) {
    throw new Error("Arguement must be a valid integer greater than 1");
  }
  assert(Number.isInteger(count), "Argument must be an integer");
  assert(typeof count === "number", "Argument must be a number");
  while (cnt !== count) {
    if (isprime(i)) {
      cnt++;
      array.push(i);
    }
    i++;
  }
  return array;
}
//console.log(typeof([1,2,3,4,5]))
assert.deepStrictEqual(
  generateprimeseries(5),
  [2, 3, 5, 7, 11],
  "The first series"
);
assert.throws(() => generateprimeseries(), Error);
