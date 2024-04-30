/*
async diff defer
let const var
critical rendering path
promise
event loop 
Closures
Functional programming
pure compose currying
this call bind apply //rare
arrow



*/
let dup = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let duplicate = [...new Set(dup)];
console.log(duplicate);

let ar1 = [1, 2, 5, 6];
ar1.splice(2, 0, 3, 4);
console.log(ar1);

let ar2 = [1, 2, 3, 4, 5, 6, 7];
let newar2 = ar2.slice(2);
console.log(newar2);

let ar3 = [101, 301, 32, 543, 278, 130];
let sor = ar3.sort(function (a, b) {
  return b - a;
});
console.log(sor);

let big = Math.min(...ar3);
console.log(big);

let big1 = ar3.reduce((a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
});
console.log(big1);

k = 3;
function rotate(val, shifts) {
  for (i = 0; i < shifts; i++) {
    val.unshift(val.pop());
    console.log(val);
  }
}
rotate(ar2, k);

ar4 = [1, 2, 3, 4, 5];
ar5 = [6, 7, 3, 8, 9];
let new1 = ar4.filter((element) => ar5.includes(element));
console.log(new1);

a = 10;
b = 11;
console.log(a);
console.log(b);
for (i = 0; i <= 10; i++) {
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}

const mer = [].concat(ar4, ar5);
console.log(mer);

let even = mer.filter((num) => num % 2 == 0);
console.log(even);

let odd = mer.filter((num) => num % 2 !== 0);
console.log(odd);

async function simulateDelayedTask(delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  console.log(`Task completed after ${delay} milliseconds`);
}

simulateDelayedTask(1000);

function add(x, y) {
  return x + y;
}
console.log(add(10, 7));
