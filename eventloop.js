console.log("Event Loop");
function f1() {
  console.log("One");
}
function f2() {
  console.log("Two");
}
function main() {
  console.log("main");

  setTimeout(f1, 1000);
  f2();
}
main();

/*
EVENT LOOP

1. Call Stack => Executes functions one by one. Sequentially executed functions are placed in call stack.
2. Browser API => The functions which will be in browser api will be moved to the callback queue and executed at last when all functions get executed.
3. Callback QUEUE FIFO => The functions in callback queue will be executed at last when all the functions are executed

4. Job Queue => Promise executor functions in the Job queue.

When a function will start execution it will be moved to call stack and will complete execution if its a normal function or else if any function while execution is identified as browser api it will be transferred to callback queue and will be executed at last.

Here in our 1st main will be executed then inside main it will recognize f1 as browser api which will be transferred to queue after that f2 will be executed and at last f1 will be executed from the queue.

Sequential things are executing sequentially, things which are asynchronous are waiting in callback queue.
If there are more than 1 functions in callback queue, the first one to enter queue will be executed first and then the other.

first main will be executed then f2 at last f1
settimeout is a browser API which will be executed at last


JOB QUEUE
Promises will go to job queue.
Functions in job queue will be executed before call back queue.
first main
settimeout web api in the call back queue
then promise in job queue
f4 gets executed 
After that job queue will be executed
If nothing remains in the stack then at last callback queue functions will  be executed.

First normal functions in the call stack
Then Job Queue after normal functions
At last Callback queue when no functions remains in call stack and job queue.

Here there are two functions in call back queue f1() and f3(), f1() will be executed 1st as it entered 1st in the callback queue and then f3() will be executed after f1 as it is next. 
*/
function f3() {
  console.log("three");
}
function f4() {
  console.log("four");
}
let promise; // Define the promise variable outside of f2()

function main1() {
  console.log("main1");

  setTimeout(f3, 1000);

  promise = new Promise(function (resolve, reject) {
    //Promise will go to job queue.
    resolve("I am a promise");
  });

  promise.then((resolve) => console.log(resolve));

  f4();
}

main1();
