console.log("Event listeners in JS");

let x = function (e) {
  alert("Hello");
};

let y = function (e) {
  alert("Hello Ajay");
};
btn.addEventListener("click", x);
btn.addEventListener("click", y);

let a = prompt("What is your age?");
if (a == 21) {
  btn.removeEventListener("click", x);
}
