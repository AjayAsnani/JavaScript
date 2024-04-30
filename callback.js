//in JavaScript the functions are executed in the sequence they are called. Not in the sequence they are defined.
console.log("Callback in JavsScript");

function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}

myFirst();
mySecond();

mySecond();
myFirst();
