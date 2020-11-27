/**
 * Just like the pronoun “he” is used to refer to the antecedent (antecedent is the noun that a pronoun refers to),
 * the this keyword is similarly used to refer to an object that the function (where this is used) is bound to.
 */
// https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function () {
    // Notice we use "this" just as we used "he" in the example sentence earlier
    console.log(this.firstName + " " + this.lastName);

    // We could have also written this
    // console.log(person.firstName + " " + person.lastName);
  },
};
var np = {
  firstName: "Pendddelope",
  lastName: "Barryddddddmore",
};
person.fullName.apply(np);

var user = {
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 },
  ],
  clickHandler: function (event) {
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1; // random number between 0 and 1

    // This line is printing a random person's name and age from the data array
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  },
};

user.clickHandler();
