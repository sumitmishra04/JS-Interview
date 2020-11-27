// implement self bind
// https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b

/**
 *
 *  bind properties
 *  1. bind return a function
 *  2. bind is called upon a function
 *  3. in the new function it is permanently bound to the first argument of bind
 */

const name = {
  fn: "Ankur",
  ln: "anand",
  printname: function (age, state, country) {
    console.log(age, state, country);
    console.log(
      this.fn + " " + this.ln + " " + age + " " + state + " " + country
    );
  },
};

Function.prototype.myBind = function (...args) {
  let obj = this; // why this = printname
  const otherParam = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...otherParam, ...args2]);
  };
};

const name2 = {
  fn: "sumit",
  ln: "mishra",
};

// const myprint = name.printname.myBind(name2, "18", "wb");
// myprint("UK");

// name.printname("12", "kolkata", "india");

Function.prototype.myApply = function (...args) {
  let obj = this; // why this = printname
  const otherParam = args.slice(1);
  const myfunc = this.bind(args[0]);
  console.log(otherParam[0], otherParam[1], otherParam[2]);
  myfunc(otherParam[0], otherParam[1], otherParam[2]);
  //   return function (...args2) {
  //     obj.apply(args[0], [...otherParam, ...args2]);
  //   };
};
name.printname.myApply(name2, ["18", "sydney", "Aus"]);
