//In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. Promises are a way to handle asynchronous operations in a more organized and manageable manner, especially when dealing with multiple asynchronous tasks.

console.log("Promise in JavaScript");

let promise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  setTimeout(() => {
    // Simulate successful completion
    resolve("Promise Resolved = Success!");

    // Simulate failure
    // reject(new Error('Failure!'));
  }, 2000);
});

promise
  .then((result) => {
    console.log(result); // Success!
  })
  .catch((error) => {
    console.error(error); // Only if reject() is called
  });

let promise1 = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  setTimeout(() => {
    // Simulate successful completion
    // resolve('Success!');

    // Simulate failure
    reject(new Error("Oops Promise Rejected = Failure!"));
  }, 2000);
});

promise1
  .then((result) => {
    console.log(result); // Only if resolve() is called
  })
  .catch((error) => {
    console.error(error); // Failure! (Error object)
  });
