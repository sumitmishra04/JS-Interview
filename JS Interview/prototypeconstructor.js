function SuperType() {
  this.name = "Virat";
}

//SuperType prototype
SuperType.prototype.getSuperName = function () {
  return this.name;
};

//SubType prototype function
function SubType() {
  this.age = 26;
}

console.log(SuperType);
console.log("----------");
console.log(SubType);
