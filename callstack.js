function one() {
  console.log("ONE");
}
function two() {
  console.log("TWO");
  one();
}
function three() {
  console.log("Three");
  two();
}

three();
// Three will be exe 1st then 2nd and then 1st
