console.log("Objects in JavaScript");
// Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, functions, arrays, etc. Objects allow you to organize and structure data in a meaningful way
// Object with key-value pairs
let person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "cooking", "traveling"],
};

console.log(person.name);
console.log(person.address.country);
console.log(person.address.city);
console.log(person.hobbies[0]);
