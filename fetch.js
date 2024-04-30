console.log("JavaScript Fetch");
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Select an element by ID
const elementById = document.getElementById("myElementId");

// Select elements by class name
const elementsByClass = document.getElementsByClassName("myClassName");

// Select elements by tag name
const elementsByTag = document.getElementsByTagName("div");

// Select the first element matching a CSS selector
const elementBySelector = document.querySelector(".mySelector");

// Select all elements matching a CSS selector
const elementsBySelectorAll = document.querySelectorAll(".mySelector");

// Define a custom element
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    // Define element's behavior here
  }
}
// Register the custom element with the browser
customElements.define("my-custom-element", MyCustomElement);
