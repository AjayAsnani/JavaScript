console.log("Recursion using Factorial");
// Recursion function always have a base case.

console.log("----------------------------------");
function invitation(person) {
  if (person === 5) return true; // as it will reach 5 it will return true
  console.log(person);
  return invitation(person + 1);
}
console.log("outcome", invitation(1));

function multiple(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiple(arr.slice(0, arr.length - 1));
  }
}
console.log(multiple([1, 2, 3, 4, 5]));
console.log("----------------------------------");
// 4 * 3 multiple([1,2]) keeps taking last element from the array and multiplies it by the previous element

// Most asked DSA question Interviews
// 1.Factorial of n (5)

function factorial(n) {
  if (n === 0) {
    // Base case
    return 1;
  } else {
    // Recursive step
    return n * factorial(n - 1); // This will keeps on decrementing 1 value again and again until it reaches the end of n
  }
}
console.log(factorial(6));
console.log("----------------------------------");

// 2.Create an array with range of numbers
// function range(start, end) {
//   if (end < start) {
//     [];
//   } else {
//     const numbers = range(start, end - 1);
//     numbers.push(end);
//     return numbers;
//   }
// }
// console.log(range(0, 5));
// console.log("----------------------------------");

// 4.Given an integer x, return true if x is palindrome else false

// 4.Fibonacci Series f(0)=0,f(1)=1   f(n)=f(n-1)+f(n-2),for n>1
// 0,1,1,2,3,5,6,13,21,34,55,89,,144,233...
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
console.log(fib(3));
console.log("----------------------------------");

console.log("Fib using Recursion");
function recurFib(n) {
  if (n <= 1) return n;
  return recurFib(n - 1) + recurFib(n - 2);
}
console.log(recurFib(6));
console.log("----------------------------------");

// 5.Reverse a String (hello --->>> olleh)
function rev(str) {
  if (str === "") {
    return "";
  } else return rev(str.substr(1)) + str.charAt(0);
}
console.log(rev("hello"));
console.log("----------------------------------");

// 6.Subsets -->> Return the possible number of sets that can be made from a given array of elements
// Example of Backtracking Algorithm

function sets(num) {
  let result = [];
  let temp = [];

  function recursets(num, i) {
    if (i === num.length) {
      return result.push([...temp]);
    }
    temp.push(num[i]);
    recursets(num, i + 1);
    temp.pop();
    recursets(num, i + 1);
  }
  recursets(num, 0);
  return result;
}
console.log(sets([1, 2, 3, 4]));
