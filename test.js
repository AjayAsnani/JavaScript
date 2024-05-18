//Find the sum of all elements in an array.
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//Check if a given number exists in an array.
const arr1 = [1, 2, 3, 4, 5];
let inc = arr1.includes(5);
console.log(inc);

//Find the minimum or maximum element in an array.
const arr2 = [1, 2, 3, 4, 5];
const max = Math.max.apply(Math, arr2);
console.log(max);
const max1 = arr2.reduce((a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
});
console.log(max1);

//Minimum
const arr3 = [1, 2, 3, 4, 5];
const min = Math.min.apply(Math, arr2);
console.log(min);
const min1 = arr3.reduce((a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
});
console.log(min1);

//Concatenate two strings.
let str1 = "Hello";
let str2 = "World!";
let str3 = [].concat(str1, str2);
console.log(str3);

//Find the length of a string.
const string = "JavaScript Is Best";
console.log("Length of this String is", string.length, "characters");

//Check if a string is empty:
const str = "Yo";
if (str.length === 0) {
  console.log("The string is empty");
} else {
  console.log("The string is not empty");
}

//Check if a string is a palindrome:
function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
const string1 = "racecar";
const string2 = "hello";
console.log(isPalindrome(string1));
console.log(isPalindrome(string2));

//Reverse a string:
function reverseString(str) {
  return str.split("").reverse().join("");
}

const string3 = "Hello, World!";
console.log(reverseString(string3));
