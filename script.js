// foo is created in global scope
"use strict";
mistypevariable = 17;
function foo() {
  console.log("Welcome to my website");
  console.log(globalThis);
  console.log(window === globalThis);
}

foo();
