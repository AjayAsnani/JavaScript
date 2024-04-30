console.log("Hoisting");
// Hoisting means to move the declarations to the top of the code before execution
// Declarations hoisted to the top but not initialization
// If we use let instead of var then we will get error (Cannot access before initialization).
// Using let and const the variable will be temporarily hoisted but will be in dead zone.
// Using var we can access the variables and will be hoisted.
// Functions and class expressions are not hoisted. (= function expression)
console.log(a);
greet();
function greet() {
  console.log("Hello");
}
var a = 9;
console.log(a);
