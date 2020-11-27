// def: A higher-order function is a function that can take another function as an argument,
//      or that returns a function as a result.
// first class functions: functions in JavaScript are treated as objects.
//                        They have the type Object, they can be assigned as the value of a variable,
//                        and they can be passed and returned just like any other reference variable.

var snakify = function (text) {
  return text.replace(/millenials/gi, "Snake People");
};
console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.

var hippify = function (text) {
  return text.replace(/baby boomers/gi, "Aging Hippies");
};
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.

var attitude = function (original, replacement, source) {
  return function (source) {
    return source.replace(original, replacement);
  };
};

var snakify = attitude(/millenials/gi, "Snake People");
var hippify = attitude(/baby boomers/gi, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.

function add(a) {
  return function (b) {
    return a + b;
  };
}

const rs = add(5)(10);
console.log(rs);
//  a = 5
// rs = function (b) {
//     return 5 + b;
//   };
//  rs(10)

// shorter syntax
const add_new = (a) => (b) => a + b;
const rs1 = add_new(5)(10);
console.log(rs1);
