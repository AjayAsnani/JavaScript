console.log("Promise API");
// PromoVIz.vercel.app to practice promises
// Promises are special object helps to deal with async programming.

// Special Methods to deal wth promises more efficiently.
// 1.Promise.all()
// 2.Promise.allSettled()
// 3.Promise.any()
// 4.Promise.race()
// 5.Promise.resolve()
// 6.Promise.reject()

// 1.Promise.all()
// Promise.all returns a promise that we have to handle.
// This method executes multiple promises in parallel not in sequence and returns new promise.
// Waits for all execution of input promises to complete.
// The execution time taken by all the promises to return, depends upon max time take by a promise.
// Execution time depends on promise which takes maximum time to complete.
// So all the promises will start on 1 and end on 5 as blue takes maximum time 5.

const red = new Promise((resolve, reject) => {
  setTimeout(() => resolve("red"), 1000);
});

const green = new Promise((resolve, reject) => {
  setTimeout(() => resolve("green"), 3000);
});
const blue = new Promise((resolve, reject) => {
  setTimeout(() => resolve("blue"), 5000); // Blue takes MAX time so all the promises will return when blue gets executed.
});
const allPromises = Promise.all([red, green, blue]);
console.log("1. Promise.all()", allPromises); // It will return a promise.
allPromises.then((value) => {
  console.log(value);
});

// Other way is using ASYNC AWAIT
const testAll = async () => {
  const colors = await Promise.all([red, green, blue]);
  console.log(colors);
  colors.forEach((color) => {
    console.log(color);
  });
};
testAll();

// If any of the promise rejects then all other will also get rejected
// If there is error is any of the promise then promise.all() rejects, rest of promises will also be rejected.
// const green = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error:green"), 3000);
//   });

// 2.Promise.allSettled()
// If there is error in any of the promise then it does not reject other promises and continues execution of other promises.
// At the end it returns all the resolved and rejected promises with reason for rejection.

const red1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("red"), 1000);
});

const green1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error:green"), 3000); // Green will be rejected but other promises will be executed
});
const blue1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("blue"), 5000);
});
const testAll1 = async () => {
  const colors = await Promise.allSettled([red1, green1, blue1]);
  console.log("2. Promise.allSettled()", colors);
};
testAll1();

// 3.Promise.any()
// Takes all input and returns a promise which is executed first.
// it returns a new promise when any of the input promise is fulfilled.
// It will return a promise which is executes first.
// First red will be returned but if red gets rejects then green will be returned.
// It will return a promises from input promises whose execution is the fastest.
// Promises which will resolved first will be printed.
// It keeps executing if the 1st rejects and looks for other input promises.
// If it does not find any resolved promises then it will print an message that all promises were rejected.
// [AggregateError: All promises were rejected]
const red2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error:red"), 1000);
});

const green2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("green"), 3000);
});
const blue2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("blue"), 5000);
});
const testAll2 = async () => {
  const colors = await Promise.any([red2, green2, blue2]);
  console.log("3. Promise.any()", colors);
};
testAll2();

// 4.Promise.race()
// It race among all the promises and fastest promise  is returned.
// If the promise gets rejected then all other promises will also be rejected.
// The fastest one will return and if fastest will reject it will reject all other.
const red3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("red"), 1000);
});

const green3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("green"), 3000);
});
const blue3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("blue"), 5000);
});
const testAll3 = async () => {
  const colors = await Promise.race([red3, green3, blue3]);
  console.log("4. Promise.race()", colors, "is the fastest one");
};
testAll3();

// 5.Promise.resolve()
// Used to resolve a value.
const yellow = new Promise((resolve, reject) => {
  setTimeout(() => resolve("yellow"), 1000);
}).then((value) => {
  console.log("5. Promise.resolve()", value);
});

// 6.Promise.reject()
// Used to reject a value or it will display error message.
// const yellow1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("yellow"), 1000);
// });
// const test = async () => {
//   const color = await Promise.reject(yellow1);
//   console.log(color);
// };
// test();
