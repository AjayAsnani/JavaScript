console.log("Remove duplicate from array");
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
let arr1 = [...new Set(arr)];
console.log(arr1);
//new Set(arr) is a Set containing all values in array, which removes duplicates. Then spread operator converts this back into an array.
// In set we cannot have duplicate values and array can have duplicate values.
console.log("Length");
let size = arr.length;
console.log(size);

console.log("Unshift adds element to the beginning of the array");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);

console.log("Concat");
let one = [11, 12, 13];
let two = [14, 15, 16];
let three = [].concat(one, two);
console.log(three);

console.log("Flattening an Array");
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters (3,4) define the new elements to be added.
console.log("Splice");
let sp = [1, 2, 5, 6];
sp.splice(2, 0, 3, 4);
console.log(sp);

console.log(" Using Splice to delete elements");
let sp1 = [1, 2, 3, 4, 5, 6];
sp1.splice(0, 2); // At 0 index 2 elements will be deleted.
console.log(sp1);

console.log("Slice");
let sl = [1, 2, 3, 4, 5];
let sli = sl.slice(1); //It will give a new array from the index of the element which is specified, In this our new will start from 2 as 2 is on index 1.
console.log(sli);

console.log("Sorting of Array");
let so = [1, 5, 4, 3, 2];
let sort = so.sort();
console.log(sort);

console.log("Reverse Array");
let rev = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rev.reverse();
console.log(rev);

// Sort method works fine with with strings.
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// So for this we have to create a simple compare function with 2 parameters for sorting correctly.
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.
console.log("Sorting of Array with Numbers in ascending order");
const points = [40, 100, 1, 5, 25, 10];
let po = points.sort(function (a, b) {
  return a - b;
});
console.log(po);

console.log("Sorting of Array with Numbers in Descending order");
const point = [40, 100, 1, 5, 25, 10];
let poi = points.sort(function (a, b) {
  return b - a;
});
console.log(poi);

console.log("Maximum element in array");
const big = [40, 100, 1, 5, 25, 112];
const max = Math.max(...big);
console.log(max);

console.log("Maximum element in array Using reduce method");
const arr4 = [40, 100, 89, 57, 250, 134];
const max1 = arr4.reduce((a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
});
console.log(max1);

console.log("Minimum element in array");
const big1 = [40, 100, 1, 5, 25, 112];
const max2 = Math.min(...big1);
console.log(max2);

console.log("Minimum element in array Using reduce method");
const arr5 = [40, 100, 89, 57, 250, 134];
const max3 = arr4.reduce((a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
});
console.log(max3);

console.log("Rotation of Array Using UNSHIFT");
let nums = [1, 2, 3, 4, 5, 6, 7]; //k=3 rotate element by 3 position
let k = 3;

function arrayRotation(arr, numberOfShifts) {
  for (i = 0; i < numberOfShifts; i++) {
    arr.unshift(arr.pop()); // pop will remove last element and unshift will show and add the last element at the beginning
    console.log(`Step ${i + 1}`, arr);
  }
}

arrayRotation(nums, k);

console.log("Rotation of Array using SPLICE ");
let nums1 = [1, 2, 3, 4, 5, 6, 7]; //k=3 rotate element by 3 position
let z = 3;

function arrayRotation1(arr, numberOfShifts) {
  let deletedArray = arr.splice(arr.length - numberOfShifts);
  for (i = 0; i < deletedArray.length; i++) {
    arr.splice(i, 0, deletedArray[i]); // At 0 index 0 element will be deleted and deleted array elements will be added one by one
    console.log(`Step ${i + 1}`, arr);
  }
}

arrayRotation1(nums1, k);

console.log("Comparing Length 2 Array");
let number1 = [1, 2, 3, 4, 5];
let number2 = [2, 5, 8, 9, 4];
const same = number1.length == number2.length;
console.log(same);

console.log("Similar between 2 Array");
let number3 = [1, 2, 3, 4, 5];
let number4 = [2, 5, 8, 9, 4];
const same1 = number3.filter((element) => number4.includes(element));
console.log(same1);

console.log("Fibonacci series in Javascript");
var a = 0,
  b = 1;
console.log(a);
console.log(b);
for (var i = 0; i <= 10; i++) {
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}

console.log("Even Odd");
function isEven(number) {
  return number % 2 === 0;
}
function isOdd(number) {
  return number % 2 !== 0;
}
const num1 = 10;
const num2 = 8;
console.log(isEven(num1)); // true
console.log(isOdd(num2)); // true

console.log("Print Even numbers from array");
let eve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = eve.filter((number) => number % 2 == 0);
console.log(even);

console.log("Print Odd numbers from array");
let odd = eve.filter((number) => number % 2 !== 0);
console.log(odd);

var a = "hello";
const type = typeof a;
console.log(type);

console.log("Difference between “ == “ and “ === “ operators");
var x = 2;
var y = "2";
console.log(x == y);
// Returns true since the value of both x and y is the same
console.log(x === y);
// Returns false since the typeof x is "number" and typeof y is "string"

//REST Operator =. it will take all the arguments and return that
function sum(...numbers1) {
  return numbers1;
}
console.log(sum(number3, number4, number2, 5, 4, "hello"));

// Fill method
const fillarr = [1, 2, 3, 4];
fillarr.fill(0); // With the help of this method every element in the array will be replaced by the specified element
console.log(fillarr);

// Find Index
const dummy = [1, 2, 3, 4, 5];
const dummy1 = dummy.findIndex((item) => {
  return item === 4;
});
console.log(dummy1);

// Flat
const flatEx = [1, [2, 3], [4, 5], 6];
const ex = flatEx.flat();
console.log(ex);

// find even odd without using if else, bitwise and switch case

function isEven(number) {
  const evenOdd = ["Odd", "Even"];
  return evenOdd[Math.abs(number) % 2];
}

const number = 11;
console.log(isEven(number)); // Output: "Odd"
