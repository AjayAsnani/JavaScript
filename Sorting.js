console.log("1. Bubble Sort");
//It takes two elements and keep on comparing with each other if 1st is bigger then they will be swapped with each other.
function BubbleSort(arr) {
  let n = arr.length;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(BubbleSort([23, 67, 45, 12, 32]));

console.log("2. Selection Sort");
//it will Select the smallest element and keep on swapping values with each other if 1st is bigger then they will be swapped with each
function SelectionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
console.log(SelectionSort([23, 67, 45, 12, 32]));

console.log("3. Insertion Sort");
// Here initially it will take first 2 elements and sort it accordingly then it will take the 3rd element and compare with the first 2 sorted elements so it will be placed accordingly.
function InsertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(InsertionSort([23, 67, 45, 12, 32, 10, 90, 4, 88]));

console.log("4. Merge Sort");
// It divides the entire array into two parts and then starts sorting the divided array until it is entirely sorted.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

console.log("5. Quick Sort");
// In quick sort take any pivot means any element from the array and then put the elements larger than the pivot in right and smaller in the left array
function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
console.log(QuickSort([8, 3, 5, 4, 7, 6, 1, 2]));
