//Map method in array.
console.log("Higher order functions");
console.log("Map");
const arr = [1, 2, 3, 4, 5];
const new0 = arr.map((arr) => arr * 2);
console.log(new0);

//REDUCE method
console.log("Reduce");
const arr1 = [1, 2, 3, 4, 5];
const new1 = arr1.reduce((a, b) => {
  return a + b;
});
console.log(new1);

//FILTER method
console.log("Filter");
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const new2 = arr2.filter(function (num) {
  return num > 4;
});
console.log(new2);

// Array Helper Methods:
// Array helper methods are built-in functions provided by JavaScript for performing common operations on arrays. They provide a more concise and expressive way to work with arrays compared to traditional for loops. Some commonly used array helper methods include:
// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array by calling a provided function on every element in the calling array.
// filter(): Creates a new array with elements that pass a provided test.
// find(): Returns the first element in the array that satisfies a provided testing function.
// reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
// some(): Checks if at least one element in the array satisfies a provided condition.
// every(): Checks if all elements in the array satisfy a provided condition.

// for loop is a control flow statement used to execute a block of code repeatedly until a specified condition evaluates to false. It's a common way to iterate over arrays or perform repetitive tasks.

// The basic syntax of a for loop in JavaScript is as follows:

// javascript
// Copy code
// for (initialization; condition; increment/decrement) {
//   // code block to be executed
// }
// Initialization: Executes once before the loop starts. It usually initializes a counter variable.
// Condition: Defines the condition for continuing the loop. If the condition evaluates to true, the loop continues; if false, the loop stops.
// Increment/Decrement: Executed after each iteration of the loop. It updates the loop control variable to eventually meet the condition.

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length - 1; i++) {
  console.log(numbers[i]);
}
