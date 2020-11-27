/**
 *
 * rule 1: variable declr are hoisted;assignments are left where they are; can be used before declr
 * rule 2: function declr and defintion is hoisted; can be used before declr in full capability
 * rule 3: fn expr are never hoisted so never use it before decl. only it variable declaration is .
 * rule 4: if normal function and variable is having same name then variables are not hoisted or
 *         function declarations are hoisted before variables;
 * rule 5: let and const variables are still hoisted,
 *         the difference being that they cannot be accessed until the assignment is done at runtime.
 */

// based on rule 4
console.log(typeof foo);

var foo = "foo";

function foo() {
  var bam = "bam";
  console.log(bam);
}
// is equal to
("use strict");

function foo() {
  var bam = "bam";
  console.log(bam);
}

console.log(typeof foo); // 'function'
foo = "foo";
// rule 1 2 3---------------
function hoisting() {
  console.log(a);
  var a = 10;
  abc();
  // fnExp();
  function abc() {
    console.log("abc");
  }

  var fnExp = function () {
    console.log("fnExp");
  };
  fnExp();
}

hoisting();

// rule 2
var a = 1;

/**Output 1 coz function a is hoisted and creates a local variable */
function b() {
  a = 10;
  return;
  function a() {}
}

b();
console.log(a);

// rule 2
/**
 * return 8 as both are hoisted to the top and the second one replaces first one
 */
function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
console.log(foo());

// rule 4
/**
 *
 * variable hoisting, only the declaration
  function declarations, the definitions are hoisted
  the hoisting of variables is simply IGNORED. 
  hence hoisted is finally assigned a value of string
 */
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent());

// rule 3
/**
 * The second bar() will not be read by the interpreter ahead of time (no hoisting).
 * The first one will be executed and returned.
 */
function foo1() {
  var bar = function () {
    return 3;
  };
  return bar();
  var bar = function () {
    return 8;
  };
}
console.log(foo1());

var myVar = "foo";
(function () {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();

//THEORY
/**
 * JavaScript interpreter looks ahead and “hoists”
 * all variable declarations to the top, and the
 * initialization remains in the same spot.
 */
function getShape(condition) {
  // shape exists here with a value of undefined
  console.log(shape);
  if (condition) {
    var shape = "square"; // some other code
    return shape;
  } else {
    return false;
  }
}
