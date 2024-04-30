console.log("Sliding Window in JS");
// 4.Sliding window Maximum
// You are given array of int, there is sliding window of size k which is moving from left to right  you can only see k numbers.
// in window each time sliding window moves right by 1 position.

// Select max element from the window and create array out of it.

// 1st window=[1,3,-1]
// 2md window=[3,-1,-3]

// input num= [1,3,-1,-3,5,3,6,7] k=3
// Output [3,3,5,5,6,7]

// BRUTE FORCE

const maxSlidingWindowNaive = function (num, k) {
  const result = [];
  const n = num.length;

  for (let i = 0; i <= n - k; i++) {
    // o(n)
    let max = num[i];
    for (j = 1; j < k; j++) {
      // O(k)
      if (num[i + j] > max) {
        max = num[j + i];
      }
    }
    result.push(max);
  }
  return result;
};
// Time complexity - O(n*k)=>O(n^2)
// Space Complexity - O(n)
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

console.log("Optimized Solution Deque");

// k=3 max window size
// nums=[1, 3, -1, -3, 5, 3, 6, 7]
// deque=[0,1,2]

const maxSlidingWindowQueue = function (nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};
console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));
