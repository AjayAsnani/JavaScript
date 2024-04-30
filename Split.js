console.log("Javascript Split Example.");
const msg = "Hello! How are you?";
console.log(msg[0]);
let arr = msg.split(" "); // SPLIT will split the elements where there is space and return array of strings as different elements.
console.log(arr);

let arr2 = msg.split(" ", 2); // It will set limit and will print only 2 elements.
console.log(arr2);

let arr3 = msg.split(); // It will return entire string into single array element when nothing is passed.
console.log(arr3);

console.log("".split());
console.log("".split("")); // Empty Array

{
  let message =
    "The Sky is blue. Grass is green! Do you know the color of the cloud?";
  let arr = message.split(/[.,!,?]/, 3); // It will split using expressions
  console.log(arr);
}

// Replace occurrence of one character with other value
{
  let name = "John Doe";
  let subs = name.split(" ");
  console.log(subs);
  let joined = subs.join("-"); // Joins the String using - separator.
  console.log(joined);
}

{
  let name = "John Doe";
  let [firstname, lastname] = name.split(" ");
  console.log(firstname, lastname);
}
