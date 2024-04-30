console.log("Sum of 2 greatest numbers in Array");
function findTwoLargestNumbers(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;

      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return [largest, secondLargest];
}

const arr = [10, 14, 42, 25, 38, 8];
const [largest, secondLargest] = findTwoLargestNumbers(arr);
console.log("Largest number:", largest);
console.log("Second largest number:", secondLargest);
const sum = largest + secondLargest;
console.log("Sum of largest and second largest number is ", sum);

// 1.Sum of all natural numbers from 1 to n
function natutalNumber(num) {
  // let sum = 0;
  // for (i = 0; i <= num; i++) { // First Method
  //   sum = sum + i;
  // }
  // return sum;
  return (num * (num + 1)) / 2; // Second Method
}
console.log("1.Sum of Natural Numbers", natutalNumber(10));

// 2.Sum of digits of a number (1287)
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    // if num > 0
    sum += num % 10; // it will divide it by 10
    num = Math.floor(num / 10); // steps keeps on repeating until we get 0
  }
  return sum;
}
console.log("2.Sum of digits of a number", sumDigits(67373));

// 3.Count No of digits of a number
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
console.log("3.Count No of digits of a number", countDigits(64783737546));

// 4.Palindrome
const palindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
  //Explanation of previous step 121=>"121"=>["1","2","1"]=>["1","2","1"]=>"121"
};
const res = palindrome(121);
const res1 = palindrome(10);
console.log("4. Palindrome", res);
console.log("Palindrome", res1);

// 5.Fibonacci Series
a = 10;
b = 11;
console.log("5.Fibonacci");
console.log(a);
console.log(b);
for (i = 0; i <= 5; i++) {
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}

// 6.Anagram => it is a word or phrase formed by rearranging the letters of a diff word or phrase, using all original letters. eg(input=>"anagram",output=>"nagaram")
const anagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};
console.log("6.Anagram");
console.log(anagram("hey", "yeh"));
console.log(anagram("car", "rat"));

console.log("Anagram using Objects");
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1; // it will give numeric values to alphabets and will count that how many times it have been repeated for eg(rat/tar so r:1,t:1,a;1 and in tar also t:1,a:1,r:1)

    obj2[t[i]] = (obj2[t[i]] || 0) + 1; // obj1 => rat    obj2 => tar
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(isAnagram("car", "rat"));
console.log(isAnagram("car", "rac"));

// 7.Two Sum => Given an array of integers num and an integer target, return indices of two numbers such that they add up to target.
// Input num [2,7,11,9] target 9
// Brute force solution all possible combinations of no of array
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
console.log("7.Two Sum");
console.log(twoSum([2, 7, 9, 13], 20));

// Using JS Objects nums=[2,7,11,15] target = 26 it will check each and every element from array by reducing it like 26 -2 = 24 which is not in array so it will again continue 26 -7 19 is not in array
console.log("Using JS Objects");
const twoSum1 = function (nums, target) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};
console.log(twoSum1([2, 7, 11, 15], 26));

console.log("8.Second Largest Number");
function secondLarge(arr) {
  const unique = Array.from(new Set(arr)); // With the help of set only unique elements are considered and the duplicates are removed.
  // sorting in descending order to get the second largest number at index 1.
  unique.sort((a, b) => {
    return b - a;
  });
  // to check whether the length of array is greater than 2 or not.
  if (unique.length >= 2) {
    return unique[1];
  } else {
    return -1;
  }
}
console.log(secondLarge([12, 1, 34, 22, 56, 56]));

console.log("8.Second Largest Number using Another approach");
// Optimized Approach
// [12, 1, 34, 22, 56, 56]
// secondLargest =34
// largest =56
function secondLargeNew(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargeNew([12, 1, 34, 22, 56, 56]));
console.log(secondLargeNew([10, 5, 10]));

console.log("9.Rotate the Array ");
// An array is given, rotate the array by k steps where k is non-negative
function rotate(num, k) {
  let size = num.length;

  if (k > size) {
    k = k % size; // 10 % 8 =2 (8 rotations to make )
  }
  const rotated = num.splice(size - k, size); // 8-5=3
  num.unshift(...rotated);
  return num;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

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

console.log("10.Remove Duplicate from the Array ");
function removed(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums;
}
console.log(removed([0, 0, 1, 1, 2, 3, 4, 5, 5]));

console.log("Another Method to remove Duplicate from array");
function removed1(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
console.log(removed1([0, 0, 1, 1, 2, 3, 3, 4, 5]));
