// function createBase(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// var add = createBase(10);

// console.log(add(6));
// console.log(add(8));
// // ---------------------------------------------------------------------------
// // call stack -> micro task(priomise) -> macro task (settimeout)
// // console.log("start");
// // setTimeout(() => {
// //   console.log("st1");
// // }, 2);
// // setTimeout(() => {
// //   console.log("st2");
// // }, 0);
// // Promise.resolve().then((r) => console.log("p1"));
// // Promise.resolve().then((r) => console.log("p2"));
// // console.log("end");
// // ----------------------------------------
// (function () {
//   var a = (b = 3);
// })();

// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));
// // ----------------------------------------

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo); // bar
//     console.log("outer func:  self.foo = " + self.foo); // bar
//     (function () {
//       console.log("inner func:  this.foo = " + this.foo); // undefined
//       console.log("inner func:  self.foo = " + self.foo); // bar
//     })();
//   },
// };
// myObject.func();
// // ----------------------------------------

// console.log(0.1 + 0.2); // 0.3
// console.log(0.1 + 0.2 - 0.3 < Number.EPSILON); //
// // ----------------------------------------
// function isInteger(x) {
//   if (Number.isInteger(x)) {
//     console.log(x);
//   }
// }
// Number.prototype.myInteger =
//   Number.myInteger ||
//   function (value) {
//     return (
//       typeof value === "number" &&
//       isFinite(value) &&
//       Math.floor(value) === value
//     );
//   };

// // Number.isInteger(9);
// // Number.myInteger(9.1);
// // Number.myInteger(-9);
// // Number.myInteger(0);
// // Number.myInteger({});
// // Number.myInteger(null);
// // Number.myInteger(undefined);
// // Number.myInteger(NaN);
// // Number.myInteger("abc");

// // (function () {
// //   console.log(1);
// //   setTimeout(function () {
// //     console.log(2);
// //   }, 1000);
// //   setTimeout(function () {
// //     console.log(3);
// //   }, 0);
// //   console.log(4);
// // })();

// var d = {};
// ["zebra", "horse"].forEach(function (k) {
//   d[k] = undefined;
// });
// console.log(d);

// var a = {},
//   b = { key: "b" };

// a[b] = 123;

// console.log(a[b]);

// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(10)
// );

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// var hero = {
//   _name: "John Doe",
//   getSecretIdentity: function () {
//     return this._name;
//   },
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// var length = 10;
// function fn() {
//   console.log("Length ", this.length);
// }
// fn();

// // var obj = {
// //   length: 5,
// //   method: function (fn) {
// //     fn();
// //     arguments[0]();
// //   },
// // };

// // obj.method(fn, 1);
// console.log(typeof undefined, typeof NULL);

// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();

var name = "sumit";
function getName() {
  console.log(this.name);
}
getName();
