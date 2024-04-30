function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} & my age is ${this.age}.`);
  };
}

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice

const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} & my age is ${this.age}.`);
  },
};

person.greet();

function isEven(number) {
  const evenOdd = ["Odd", "Even"];
  return evenOdd[Math.abs(number) % 2];
}

const number = 11;
console.log(isEven(number)); // Output: "Odd"

const input = { a: 1, b: 2, c: 3 };
const output = Object.entries(input).map(([key, value]) => ({ [key]: value }));
console.log(output);
// Object.entries(input) converts the object into an array of key-value pairs.
// map() iterates over the key-value pairs and creates a new object for each, using computed property syntax ([key]: value) to dynamically assign the key and value.

const input1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const output1 = Object.assign({}, ...input1);
console.log(output1);
// Object.assign({}, ...input) spreads the array elements into Object.assign(), which merges them into a single object. The empty object ({}) is used as the initial target for merging.
