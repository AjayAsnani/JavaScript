console.log("Types of Merging arrays.");

// 1.for loop
// 2.SPREAD Operator
// 3.Concat
// 4.PUSH
// 5.REDUCE

// 1.for loop
const merge = (first, second) => {
  for (let i = 0; i < second.length; i++) {
    first.push(second[i]);
  }
  return first;
};
let mergedarray = merge([1, 2, 3], [4, 5, 6]);
console.log("1. Using for loop", mergedarray);

// Merging 3 Arrays
let mergedarray1 = merge(merge([1, 2, 3], [4, 5, 6]), [7, 8, 9]); //Here First 2 arrays are considered as a single array
console.log("Merged 3 Arrays", mergedarray1);

// Using SPREAD Operator (...)
// It spreads every element into an single element and merges them into a single array.
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr, ...arr2];
console.log("2. Using SPREAD Operator", merged);

// CONCAT
{
  let arr = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let merged = arr.concat(arr2);
  console.log(merged);
  // 2nd Method
  let merged1 = [].concat(arr, arr2);
  console.log("3. Using CONCAT", merged1);
}
// If Input type is Array always SPREAD is preferred but if input type is string then use Concat method.
{
  let arr = [1, 2, 3];
  let arr2 = "John";
  let merged = [...arr, ...arr2]; //Using SPREAD
  console.log(merged);
  let merged1 = [].concat(arr, arr2); //Using CONCAT
  console.log(merged1);
}

// PUSH
{
  let arr = [1, 2, 3];
  let arr2 = [4, 5, 6];
  // let merged = arr.push(arr2) It will return SIZE of this array.
  let merged = arr.push(...arr2); // Using Spread Operator it will spread each element into different.
  console.log("4. Using PUSH", merged);
  console.log(arr);
}

// REDUCE
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let merged = arr2.reduce((arr, item) => {
    arr.push(item);
    return arr;
  }, arr1);
  console.log("5. Using REDUCE", merged);
}
