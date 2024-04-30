console.log("JavaScript Async Await");
//async makes a function return a Promise

//await makes a function wait for a Promise

// async: The async keyword is used to define a function as asynchronous. An asynchronous function returns a Promise, and the async keyword ensures that the function always returns a Promise, even if it doesn't explicitly do so. Inside an async function, you can use the await keyword to pause execution until a Promise settles (either resolves or rejects).

// await: The await keyword can only be used inside an async function. It pauses the execution of the async function until a Promise settles. If the Promise resolves, await returns the resolved value; if the Promise rejects, it throws an error, which you can catch using a try...catch block.

// An asynchronous function in JavaScript is a function that does not necessarily execute in a linear or sequential order. Instead, it allows other operations to continue while it performs its task in the background.

async function weather() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 5000);
  });

  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)
  console.log("Fetching Delhi Weather Please wait ...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather: " + delhiW);
  console.log("Fetching Bangalore Weather Please wait ...");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather: " + bangaloreW);
  return [delhiW, bangaloreW];
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting ");
};

const main1 = async () => {
  console.log("Welcome to weather control room");
  let a = await weather();
  let b = await cherry();
};
main1();

// Another example
function asynchronousTask() {
  console.log("Start of asynchronous task");

  setTimeout(() => {
    console.log("End of asynchronous task");
  }, 2000);

  console.log("Continuing with other operations");
}

console.log("Before calling asynchronousTask");
asynchronousTask();
console.log("After calling asynchronousTask");
