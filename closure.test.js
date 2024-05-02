/*let x = 10;
describe("Closure tests", () => {
  test("A very simple closure", () => {
    let y = 10;
    function init() {
      const name = "Mozilla"; // name is a local variable created by init
      function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name);
        y += 10; // use variable declared in the parent function
        console.log(y, x);
      }
      return displayName;
    }
    const displayitself = init();
    displayitself();
    displayitself();
  });

  test("currying functions", () => {
    // function add(a,b){
    // return a + b + c;
    // }

    // Process of turning function that takes more than one arguement into a hierarchial definition
    // of functions where ecah function given at a level takes only single arguement until we reach an inner level.
    function add(a) {
      return (b) => a + b;
    }

    function add3(a) {
      return (b) => (c) => a + b + c;
    }

    const add5 = add(5); // Returns function to add5
    add5(3); // 8
    add5(2); // 7
    add5(10); // 15 add5 is pointer free function as this was created by closure mechanism.

    const add6 = add(6);
    add6(3); // 9
    // Any closure or function that returns another closure or takes one or more args
    // which are closures - is known as higher order functions
  });
});


function foo() {
  setTimeout(() => console.log("delayed"), 1000);
  // global this specail pointer available
  console.log(globalThis);
  console.log(globalThis === global);
}

foo();*/
