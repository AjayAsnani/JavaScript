console.log("Closures");
// Function along with its lexical environment is called closure.
// When a closure is returned then along with it the references of its lexical environment are also returned.
message = "Good Evening";
function one() {
  message = "Good Morning";

  //   let message = "Good Afternoon";
  console.log("Hello " + message);

  let c = function hello2() {
    console.log("I am C " + message);
  };
  return c;
}
c = one();
c();

function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  name = "John";
  return displayName;
}
let b = init();
b();

// NESTED FUNCTIONS CLOSURES.
// In y and z we will get 999 because y and z doesn't have any variable declarations so they will use their parent variable or lexical environment/scope variables
// Closures have access to its outer function scope.
// Closure is a function along with its lexical environment.
function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      console.log(a);
      const z = () => {
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  return x;
}
let a = returnFunc();
a();
