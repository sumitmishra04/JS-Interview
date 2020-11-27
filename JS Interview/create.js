Object.create(prototype_object, propertiesObject);
var person = Object.create(null);

typeof(person) // Object
console.log(person) // Object with prototype object as null

// Set property to person object
person.name = "Virat";

console.log(person) // Object with name as property and prototype as null