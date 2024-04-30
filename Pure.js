// Pure functions always return same output for ame input.
console.log("Pure Functions");
function test(input) {
  return `Testing ${input}`;
}

const value = test(123);
console.log(value);

//Characteristics of a PURE Function
// 1.Predictable
// 2.Readable
// 3.Reusable
// 4.Testable

function getname(name) {
  return `Hello ${name}`;
}

getname("John");
console.log(getname);

//Side effect or Impure Function
let greeting = "Hello"; //Variable value can be changed at the backend.
function getname(name) {
  return `${greeting} ${name}`;
}

// Other Side Effects
// 1.Mutating the inputs. / Changing hte inputs and making it Impure.
// 2.Dom Manipulation.

// How to Solve, by cloning the users array and the original array remains same

function findReverse(users, item) {
  const reversed = [...users].reverse();

  const found = reversed.found((user) => {
    return user === item;
  });
  return found;
}
const users = ["A", "B", "C", "D"];
const foundUser = findReverse(users, "B");
document.getElementById("users-id").innerText = foundUser;
