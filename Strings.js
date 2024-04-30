console.log("Strings in JavaScript");

const str = "World";
console.log`hello ${str} how are ${"you"}`;

function test(string, youtube, person) {
  console.log(string, youtube, person);
}
const language = "JavaScript";
const name = "John";

test`Primary language is ${language} of ${name}`;

function test1(string, youtube) {
  console.log(string, youtube);
}
const language1 = "JavaScript";
const name1 = "John";

test1`Primary language is ${language1} of ${name1}`;

// LENGTH OF STRING
const string = "JavaScript Is Best";
console.log("Length of a String", string.length);

// Accessing String Characters
console.log(string[5]);
console.log(string.charAt(8));

// LOOPING
for (i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// MODIFYING STRINGS
// Stings in JavaScript are immutable, we cannot change or modify them directly.

string[3] = "b"; // Can't do this
console.log(string.replace("t", "s"));
console.log(string.replaceAll("s", "a")); // It understands difference between Small and Capital letters.

// CONCAT
console.log(string.concat(" Agree or not"));
const newStr = "     Hello World     ";
console.log(newStr.trim()); // TRIM removes extra spaces from both the ends but not from between.

//SEARCHING
console.log(string.indexOf("est")); // it will return the index from which the string is starting.
console.log(string.indexOf("a")); // If alphabet occurs multiple times then also it will return where it is first occurring.
console.log(string.lastIndexOf("a")); // this method gives last index of the multiple occurring alphabet
console.log(string.startsWith("J"));
console.log(string.startsWith("a"));
console.log(string.endsWith("t"));
console.log(string.endsWith("a"));

// EXTRACTING SUB STRINGS
console.log(string.substring(14)); // It will return the substring from the specified index number.
console.log(string.substring(0, 10)); // It will start from 0 and return till 9 index of the string.
console.log(string.slice(-18, -8));

// STRING CONVERSION
const convert = { name: "JOHN" }; // It will give the type of this variable.
console.log(String(convert));
console.log(JSON.stringify(convert)); // This will convert into String.
// console.log(JSON.parse(convert)) will convert back into object or string into object.

console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string.charCodeAt(3)); // It will give the ASCII value for the alphabet whose index is specified.
console.log(String.fromCharCode(65)); // It ill convert or give the alphabet whose ascii value is specified.

const str1 = "Apple";
const str2 = "Samsung";
const str3 = "Apple";
console.log(str1.localeCompare(str2)); // Compares whether the strings are same or not.
console.log(str1.localeCompare(str3));

console.log(string.includes("Is")); // Checks whether string contains the word or not.
console.log(string.includes("IS"));

// SPLITTING AND JOINING STRINGS.
console.log(string.split(" ")); // It will return array of strings from where there is space between the sentence.
console.log(string.split("a"));

const arr = ["apple", "mango", "banana"];
console.log(arr.join(" why ")); // Joins the strings or array using the specified word.

// DSA INTERVIEW QUESTIONS
// Q1. Truncate the text.
// Write func that checks len of given string - str, and if surpasses a specified max length, it replaces end of string with the ellipsis char "..." so len matches max length
// INPUT -> JavaScript is Best.
// OUTPUT -> JavaScript...

function truncate(str2, maxlength) {
  if (str2.length > maxlength) {
    return str2.slice(0, maxlength) + "...";
  } else {
    return str2;
  }
}

console.log(truncate("JavaScript Is Best", 10));

// Q2. Palindrome Number
// Input x == 121 == TRUE
// Input x == 10 == FALSE

// STEPS
// 121 ==> "121" ==> ["1","2","1"] ==> ["1","2","1"] ==> "121" ==>

const isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(121);
console.log(res);

// Q3. Hamming Distance
// Return hamming distance between 2 strings.
// str 1 ==> hello
// str 2 ==> hwllr
// output ==> 2

// Length should be equal.

function hamming(x, y) {
  if (x.length != y.length) {
    throw new Error("Strings are of Different length");
  }
  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
}
console.log(hamming("hello", "helio"));

// ANOTHER VARIATION.
// Return hamming distance between bits.
function hamming1(x, y) {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length != y.length) x = "0" + x;
  } else {
    while (x.length != y.length) y = "0" + y;
  }
  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
}
console.log(hamming1(2, 8));

// Q4. Valid Anagram
// Anagram is word or phrase formed by rearranging letters of different word or phrase using all original letters exactly once.
// Input s="anagram" t="nagaram" ==> true
// input s="rat" t="car" ==> False

const isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s == t;
};

// Second Solution
const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(isAnagram1("anagram", "nagaram"));
