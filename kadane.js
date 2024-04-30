console.log("Kadane's Algorithm");
// Given an array, find subarray with largest sum and return its sum
// Input [-2,1-3,4,-1,2,1,-5,4] --->>> Output 6 [4,-1,2,1]
// Input [5,4,-1,7,8] --->>> Output 23 [5,4,-1,7,8]

function maxSubArray(num) {
  let maxSum = num[0];
  let starti = 0;
  let endi = 0;
  for (let i = 0; i < num.length; i++) {
    let currentSum = 0;
    // It will continue and compute one by one all the values to reach the output
    for (let j = i; j < num.length; j++) {
      currentSum = currentSum + num[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        starti = i;
        endi = j;
      }
    }
  }
  return { sum: maxSum, subArray: num.slice(starti, endi + 1) };
}
console.log(maxSubArray([-2, 1 - 3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

// Kadane's Algorithm
function maxSubArray1(num1) {
  let sum = 0;
  let max = num1[0];
  for (let i = 0; i < num1.length; i++) {
    sum += num1[i]; // Adds current element of the array to the sum and then checks the two condition
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
console.log(maxSubArray1([-2, 1 - 3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray1([5, 4, -1, 7, 8]));
