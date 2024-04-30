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
